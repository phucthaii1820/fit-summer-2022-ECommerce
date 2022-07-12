import {
    FaFacebookSquare,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Logo from "src/image/Logo.svg";
import { Button, Input } from "antd";
import { useState } from "react";

export default function Footer() {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return (
        <div className="container">
            <footer className="bg-white mt-auto w-screen">
                <div className="grid lg:grid-cols-3 lg:gap-10 p-16 max-w-screen-2xl mx-auto lg:px-4 p-8 text-base">
                    <div className="text-left rounded lg:px-5">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block md:hidden h-12 w-auto"
                                src={Logo}
                                alt="Workflow"
                            />
                            <img
                                className="hidden md:block h-20 w-auto"
                                src={Logo}
                                alt="Workflow"
                            />
                        </div>

                        <p className="font-bold my-5">
                            CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI & DỊCH VỤ BIKEGEAR
                        </p>
                        <div className="my-5">
                            <p>Giấy CNĐKDN: 0316810152 - Ngày cấp: 19/04/2021 - Nơi cấp: Sở Kế Hoạch và Đầu Tư TPHCM</p>
                            <p>Địa chỉ: 304-306 Nguyễn Trãi, Phường 08, Quận 05, Thành phố Hồ Chí Minh - Điện thoại: 028.2220.7878 - Email: cskh@totoday.vn</p>
                        </div>
                        <ul>
                            <li className="flex text-3xl ">
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaFacebookSquare></FaFacebookSquare>
                                </a>
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaGithub></FaGithub>
                                </a>
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaInstagram></FaInstagram>
                                </a>
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaYoutube></FaYoutube>
                                </a>
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaTwitter></FaTwitter>
                                </a>
                                <a href="/" className="pr-2 text-yellow-light">
                                    <FaGoogle></FaGoogle>
                                </a>
                            </li>
                        </ul>
                        <div className="lg:my-5">
                            <div className="font-bold">
                                <p>Phương thức thanh toán</p>
                                <div className="grid grid-cols-3 my-5">
                                    <div className="col-span bg-gray-100 mr-2 border border-black rounded-lg h-20">

                                    </div>
                                    <div className="col-span bg-gray-100 mx-2 border border-black rounded-lg h-20">

                                    </div>
                                    <div className="col-span bg-gray-100 ml-2 border border-black rounded-lg h-20">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="p-5 text-left flex border border-black rounded-lg bg-gray-100">
                            <div className="flex-1">
                                <p className="font-bold mb-1">Đăng ký nhận tin qua email</p>
                                <p className="mb-0">Nhận tin qua email để không bỏ lỡ các tin tức khuyến mãi</p>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-auto py-2">
                                    <Input placeholder="Nhập số điện thoại của bạn" className="h-10 p-2"
                                        style={{
                                            borderColor: "#F5B301",
                                            borderWidth: "2px",
                                            borderTopRightRadius: "0px",
                                            borderBottomRightRadius: "0px",
                                            backgroundColor: "#f3f4f6"
                                        }} />
                                </div>
                                <div className="py-2">
                                    <Button className="h-10 p-2"
                                        style={{
                                            height: "40px",
                                            borderColor: "#F5B301",
                                            borderTopLeftRadius: "0px",
                                            borderBottomLeftRadius: "0px",
                                            backgroundColor: "#F5B301",
                                            fontWeight: "bold",
                                            color: isHovering ? "white" : "black"
                                        }}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >Đăng ký</Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-8">
                            <div className="flex-auto w-72">
                                <div className="grid grid-cols-3 gap-10 mb-6 text-left">
                                    <div className="col-span">
                                        <p className="text-lg font-bold mb-1">Thông tin</p>
                                        <p className="mb-1">Giới thiệu</p>
                                        <p className="mb-1">Liên hệ công ty</p>
                                        <p>Gia nhập BIKEGEAR</p>
                                    </div>
                                    <div className="col-span">
                                        <p className="text-lg font-bold mb-1">Chính sách</p>
                                        <p className="mb-1">Chính sách đổi hàng</p>
                                        <p className="mb-1">Chính sách bảo hành</p>
                                        <p>Chính sách hoàn tiền</p>
                                    </div>
                                    <div className="col-span">
                                        <p className="text-lg font-bold mb-1">Hỏi đáp</p>
                                        <p className="mb-1">Thanh toán và vận chuyển</p>
                                        <p>Kiểm tra thông tin đơn hàng</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex-initial flex flex-row mr-8 h-16 w-96 items-center justify-center bg-gray-100 mr-2 border border-black rounded-lg">
                                        <FontAwesomeIcon icon={faList} className="pl-2 h-6" />
                                        <a href="/" className="pl-8">
                                            <p className="text-base lg:text-lg font-bold pt-4 text-black">Kiểm tra đơn hàng</p>
                                        </a>
                                    </div>
                                    <div className="flex-initial flex flex-row mr-8 h-16 w-96 items-center justify-center bg-gray-100 mr-2 border border-black rounded-lg">
                                        <FontAwesomeIcon icon={faCommentDots} className="pl-2 h-6" />
                                        <a href="/" className="pl-8">
                                            <p className="text-base lg:text-lg font-bold pt-4 text-black">Góp ý - Than phiền</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="font-bold text-left ml-10">
                                <p className="text-lg mb-1">Liên hệ</p>
                                <p className="text-gray-400 mb-1">Tư vấn mua hàng</p>
                                <p className="text-yellow-light mb-1">1900.0009</p>
                                <p className="text-yellow-light mb-1">(T2-T7 8g30 - 21h00)</p>
                                <p className="text-gray-400 mb-1">Hotline góp ý</p>
                                <p className="text-yellow-light mb-1">123.456.7890 (24/7)</p>
                                <p className="text-gray-400 mb-1">Email chăm sóc khách hàng</p>
                                <p className="text-yellow-light">cskh@bikegear.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-base">
                    <div className="mx-24">
                        Copyright © 2021 Motorbike Accessory, EC02-02
                    </div>
                </div>
            </footer>
        </div>
    );
}
