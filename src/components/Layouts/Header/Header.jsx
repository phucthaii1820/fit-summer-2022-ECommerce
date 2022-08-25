import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import ReactImageFallback from "react-image-fallback";

import { Menu, Input, Button, Dropdown, Modal, AutoComplete } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  FaUserCircle,
  FaShoppingCart,
  FaSignOutAlt,
  FaRegHeart,
  FaKey,
  FaChalkboardTeacher,
} from "react-icons/fa";

import Logo from "src/image/Logo.svg";
import { getAllCategories } from "@/API/category";
import DrawerMenu from "@/components/Menu/DrawerMenu";
import DropDownMenu from "@/components/Menu/DropDownMenu";
import ShoppingCartModal from "@/components/shopping-cart/ShoppingCartModal";
import { searchProducts } from "@/API/product";

import userStore from "@/stores/user";

import "./Header.css";

export default function Header() {
  const { user, logout } = userStore((state) => state);
  const [categories, setCategories] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [options, setOptions] = useState([]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    async function fetchHeader() {
      try {
        const resCategories = await getAllCategories();
        setCategories(resCategories);
      } catch (err) {
        console.log(err);
      }
    }
    fetchHeader();
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      window.location.href = "/search?keyword=" + encodeURIComponent(keyword);
    }
  };

  const menu = (
    <Menu className="bg-white dark:bg-dark-black dark:text-dark-text z-top w-68 p-3 rounded-xl shadow-md max-w-sm dark:shadow-dark">
      <Menu.Item icon={<FaUserCircle />} key="info">
        <Link to="/profile">Thông tin tài khoản</Link>
      </Menu.Item>
      {user?.role === 1000 ? (
        <Menu.Item icon={<FaChalkboardTeacher />}>
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      ) : null}
      <Menu.Item icon={<FaKey />} key="changePassword">
        <Link to="/profile/change-password">Thay đổi mật khẩu</Link>
      </Menu.Item>
      <Menu.Item icon={<FaShoppingCart />} key="myOrder">
        <Link to="/profile/my-order">Đơn hàng của tôi</Link>
      </Menu.Item>
      <Menu.Item icon={<FaRegHeart />} key="wishList">
        <Link to="/profile/wish-list">Danh sách yêu thích</Link>
      </Menu.Item>
      <Menu.Item
        icon={<FaSignOutAlt />}
        key="logOut"
        onClick={() => {
          logout();
        }}
      >
        <div>Đăng xuất</div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await searchProducts(keyword, "1");
        let data = [];
        res?.data[0]?.producs.map((item) => {
          if (item.statusPost === 1) {
            data.push({
              value: item.title,
              id: item._id,
              category: item.category,
            });
          }
        });
        setOptions(data);
      } catch (err) {
        console.log(err);
      }
    }
    if (keyword !== "") {
      const timer = setTimeout(() => {
        fetchData();
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setOptions([]);
    }
  }, [keyword]);

  const onSearch = async (searchText) => {
    setKeyword(searchText);
  };

  const onSelect = (val, option) => {
    console.log(option);
    window.location.href = `/product-detail/${option.id}`;
  };

  return (
    <Disclosure as="nav" className="animate-none shadow-xl">
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-20">
              <DrawerMenu
                categories={categories}
                profileUser={user}
              ></DrawerMenu>
              {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div> */}
              <div className="flex-1 flex mx-6 md:mx-0 items-center md:items-stretch md:justify-start">
                <div className="flex items-center">
                  <Link to="/">
                    <img
                      className="block md:hidden h-10 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                    <img
                      className="hidden md:block h-14 w-auto"
                      src={Logo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex ">
                    <div className="pt-3">
                      <Link
                        to="/"
                        style={{
                          "&::before": {
                            transition: isHovering
                              ? "width .2s ease-in-out"
                              : "",
                            backgroundColor: "#F5B301",
                          },
                        }}
                      >
                        <Button
                          style={{
                            fontSize: "20px",
                            fontWeight: "500",
                            width: "fit-content",
                            height: "100%",
                            border: "0px",
                            paddingInline: "10px",
                            color: isHovering ? "black" : "black",
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          Home
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 ml-3">
                      <Button
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          width: "fit-content",
                          height: "100%",
                          border: "0px",
                          paddingInline: "10px",
                          color: isHovering ? "black" : "black",
                          // transition: isHovering ? "width .2s ease-in-out" : "",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <DropDownMenu categories={categories}></DropDownMenu>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center mt-2.5 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                <div className="hidden md:block">
                  <AutoComplete
                    options={options}
                    onSelect={(val, option) => onSelect(val, option)}
                    onSearch={onSearch}
                    onKeyDown={handleSearch}
                    placeholder="Search"
                    notFoundContent="Không tìm thấy kết quả"
                    style={{
                      border: "0px",
                    }}
                  >
                    <Input
                      style={{
                        width: "20rem",
                        borderRadius: "25px",
                        margin: "0x 16px 0 0",
                      }}
                    ></Input>
                  </AutoComplete>
                </div>

                {user ? <ShoppingCartModal></ShoppingCartModal> : null}

                {user ? (
                  <div className="">
                    <Dropdown
                      placement="bottomRight"
                      overlay={menu}
                      trigger={["click"]}
                      className="cursor-pointer"
                    >
                      <div
                        className="hidden md:block ring-gray flex items-center justify-center overflow-hidden rounded-full cursor-pointer border-2 border-gray-300 border-solid"
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      >
                        <ReactImageFallback
                          className="min-w-full min-h-full block flex-shrink-0  "
                          src={Logo}
                          alt="logo"
                          fallbackImage={Logo}
                        ></ReactImageFallback>
                      </div>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="">
                    <Link
                      to="/login"
                      className="hidden md:block hover:text-yellow-light text-black rounded-md text-sm"
                    >
                      <UserOutlined style={{ fontSize: "2em" }} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="block md:hidden pb-2 text-center">
            <AutoComplete
              options={options}
              onSelect={(val, option) => onSelect(val, option)}
              onSearch={onSearch}
              onKeyDown={handleSearch}
              placeholder="Search"
              notFoundContent="Không tìm thấy kết quả"
              style={{
                border: "0px",
              }}
            >
              <Input
                style={{
                  width: "20rem",
                  borderRadius: "25px",
                  margin: "0x 16px 0 0",
                }}
              ></Input>
            </AutoComplete>
          </div>
        </>
      )}
    </Disclosure>
  );
}
