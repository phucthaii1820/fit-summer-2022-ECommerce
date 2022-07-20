import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import ReactImageFallback from "react-image-fallback";

import { Menu, Input, Button, Dropdown } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { FaUserCircle, FaBook, FaShoppingCart, FaSignOutAlt, FaRegHeart, FaKey } from "react-icons/fa";

import Logo from "src/image/Logo.svg";
import { getProfileUser } from "@/API/user";
import { getAllCategories } from "@/API/category";
import { logout } from "@/utils/auth";
import DrawerMenu from "@/components/Menu/DrawerMenu";
import DropDownMenu from "@/components/Menu/DropDownMenu";

const { Search } = Input;

export default function Header({ user, ...props }) {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // const category_items = [
  //   // remember to pass the key prop which is required
  //   {
  //     label: "DANH MỤC",
  //     key: "category",
  //     children: [
  //       { label: "Niềng", key: "category-item-1" },
  //       { label: "Phuộc", key: "category-item-2" },
  //       { label: "Thắng dĩa", key: "category-item-3" },
  //       { label: "Ống pô", key: "category-item-4" },
  //       { label: "Tay thắng xe", key: "category-item-5" },
  //       { label: "Ốc xe sơn Titan", key: "category-item-6" },
  //       { label: "Bộ lọc nhớt", key: "category-item-7" },
  //       { label: "Gương chiếu hậu", key: "category-item-8" },
  //       { label: "Đèn pha", key: "category-item-9" },
  //       { label: "Đèn độ bánh xe", key: "category-item-10" },
  //       { label: "Nhông sên", key: "category-item-11" },
  //     ],
  //   },
  // ];

  // const action_items = [
  //   // remember to pass the key prop which is required
  //   {
  //     label: "",
  //     key: "",
  //     icon: <UserOutlined style={{ fontSize: "2em" }} />,
  //     children: [
  //       { label: "Thông tin tài khoản", key: "user-action-item-1" },
  //       { label: "Thay đổi mật khẩu", key: "user-action-item-2" },
  //       { label: "Đơn hàng của tôi", key: "user-action-item-3" },
  //       { label: "Quản lý thông báo", key: "user-action-item-4" },
  //       { label: "Danh sách yêu thích", key: "user-action-item-5" },
  //       { label: "Đăng xuất", key: "user-action-item-6" },
  //     ],
  //   },
  // ];

  useEffect(() => {
    async function fetchHeader() {
      try {
        const resCategories = await getAllCategories();
        setCategories(resCategories);

        if (user) {
          const resProfile = await getProfileUser();
          setProfile(resProfile?.user_data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchHeader();
  }, []);

  const ChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      window.location.href = "/search?query=" + encodeURIComponent(search);
    }
  };
  
  const menuItems = [
    {
      key: 'info',
      icon: <FaUserCircle />,
      label: "Thông tin tài khoản",
    },
    {
      key: 'changePassword',
      icon: <FaKey />,
      label: "Thay đổi mật khẩu",
    },
    {
      key: 'myOrder',
      icon: <FaShoppingCart />,
      label: "Đơn hàng của tôi",
    },
    {
      key: 'wishList',
      icon: <FaRegHeart />,
      label: "Danh sách yêu thích",
    },
    {
      key: 'logOut',
      icon: <FaSignOutAlt />,
      label: "Đăng xuất",
    },
  ]

  const menu = (
    <Menu className="bg-white dark:bg-dark-black dark:text-dark-text z-top w-68 p-3 rounded-xl shadow-md max-w-sm dark:shadow-dark">
      <Menu.Item icon={<FaUserCircle />} key="info">
        <Link to="/profile">Thông tin tài khoản</Link>
      </Menu.Item>
      <Menu.Item icon={<FaKey />} key="changePassword">
        <Link to="/profile/change-password">Thay đổi mật khẩu</Link>
      </Menu.Item>
      <Menu.Item icon={<FaShoppingCart />} key="myOrder">
        <Link to="/profile/my-order">Đơn hàng của tôi</Link>
      </Menu.Item>
      <Menu.Item icon={<FaRegHeart />} key="wishList">
        <Link to="/profile/wish-list">Danh sách yêu thích</Link>
      </Menu.Item>
      <Menu.Item icon={<FaSignOutAlt />} key="logOut">
        <a onClick={logout}>Đăng xuất</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Disclosure as="nav" className="animate-none shadow-xl">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-20">
              <DrawerMenu
                categories={categories}
                user={user}
                profileUser={profile}
              ></DrawerMenu>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              </div>
              <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-14 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-14 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex ">
                    <div className="pt-3">
                      <Link to="/">
                        <Button
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            width: "fit-content",
                            height: "100%",
                            border: "0px",
                            paddingInline: "10px",
                            color: isHovering ? "black" : "black"
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>
                          Home
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 ml-3">
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          width: "fit-content",
                          height: "100%",
                          border: "0px",
                          paddingInline: "10px",
                          color: isHovering ? "black" : "black"
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <DropDownMenu categories={categories}></DropDownMenu>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden md:block">
                  <Input
                    style={{
                      width: "20rem",
                      borderRadius: "25px",
                      margin: "10px 16px 0 0"
                    }}
                    placeholder="Search"
                    onChange={ChangeHandler}
                    onKeyDown={handleSearch}
                  />
                </div>
                <div className="mt-3">
                  <ShoppingCartOutlined style={{ fontSize: "2em" }} />
                </div>
                {user ? (
                  <div className="hidden md:block">
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      className="cursor-pointer"
                    >
                      <div
                        className="ml-3 ring ring-gray flex items-center justify-center overflow-hidden rounded-full cursor-pointer"
                        style={{ width: 40, height: 40 }}
                      >
                        <ReactImageFallback
                          className="min-w-full min-h-full block flex-shrink-0"
                          src={Logo}
                          alt="logo"
                          fallbackImage={Logo}
                        >
                        </ReactImageFallback>
                      </div>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="flex space-x-4 mt-3 ml-3">
                    <Link to="/login"
                      className="bg-gray-700 hover:text-yellow-light text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                    >
                      Đăng nhập
                    </Link>
                    <Link to="/register"
                      className="bg-gray-700 hover:text-yellow-light text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block"
                    >
                      Đăng ký
                    </Link>
                  </div>
                )}
              </div>
              {/* <div className="block md:hidden">
                <SearchMoblie></SearchMoblie>
              </div> */}
            </div>
          </div>

        </>
      )}
    </Disclosure>
  );
}
