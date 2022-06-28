import { Button, Input } from "antd";
import { FaFacebookSquare, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faList } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import Logo from "src/image/Logo.svg";

export default function Footer() {
    return (
        <div className="absolute mt-auto bottom-0 w-screen" style={{paddingTop: '100px'}}>
            <footer className="bg-white">
                <div className="grid grid-cols-3 gap-10 p-16 max-w-screen-2xl mx-auto px-4 p-8 text-base">
                    <div className="text-left rounded px-5">
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

                        <p className="text-lg font-bold my-5">
                            CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI & DỊCH VỤ BIKEGEAR
                        </p>
                        <div className="my-5">
                            <p>Giấy CNĐKDN: 0316810152 - Ngày cấp: 19/04/2021 - Nơi cấp: Sở Kế Hoạch và Đầu Tư TPHCM</p>
                            <p>Địa chỉ: 304-306 Nguyễn Trãi, Phường 08, Quận 05, Thành phố Hồ Chí Minh - Điện thoại: 028.2220.7878 - Email: cskh@totoday.vn</p>
                        </div>
                        <ul>
                            <li className="flex text-3xl">
                                <a href="/" className="pr-2 ">
                                    <FaFacebookSquare></FaFacebookSquare>
                                </a>
                                <a href="/" className="pr-2">
                                    <FaGithub></FaGithub>
                                </a>
                                <a href="/" className="pr-2">
                                    <FaInstagram></FaInstagram>
                                </a>
                                <a href="/" className="pr-2">
                                    <FaYoutube></FaYoutube>
                                </a>
                                <a href="/" className="pr-2">
                                    <FaTwitter></FaTwitter>
                                </a>
                                <a href="/" className="pr-2">
                                    <FaGoogle></FaGoogle>
                                </a>
                            </li>
                        </ul>
                        <div className="my-5">
                            <div className="text-lg font-bold">
                                <p>Phương thức thanh toán</p>
                                <div className="grid grid-cols-3 my-5">
                                    <div className="col-span bg-gray-200 mr-2 border-2 border-black rounded-lg h-20">

                                    </div>
                                    <div className="col-span bg-gray-200 mx-2 border-2 border-black rounded-lg h-20">

                                    </div>
                                    <div className="col-span bg-gray-200 ml-2 border-2 border-black rounded-lg h-20">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="p-5 text-left flex border-2 border-black rounded-lg bg-gray-100">
                            <div className="flex-1">
                                <p className="text-lg font-bold">Đăng ký nhận tin qua email</p>
                                <p className="">Nhận tin qua email để không bỏ lỡ các tin tức khuyến mãi</p>
                            </div>
                            <div className="flex flex-1">
                                <div className="flex-auto py-2">
                                    <Input placeholder="Nhập email của bạn" className="h-10 bg-gray-100 border-l-2 border-t-2 border-b-2 border-r-0 border-yellow-light rounded-l-lg rounded-tr-none rounded-br-none hover:border-yellow-light focus:border-yellow-light" />
                                </div>
                                <div className="py-2">
                                    <Button className="bg-yellow-light text-black font-bold border-r-2 border-t-2 border-b-2 border-l-0 border-yellow-light rounded-r-lg rounded-tl-none rounded-bl-none hover:bg-yellow-light hover:border-yellow-light hover:text-black focus:border-yellow-light focus:bg-yellow-light focus:text-black" size="large">Đăng ký</Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-12">
                            <div className="flex-auto w-72">
                                <div className="grid grid-cols-3 gap-10 mb-16 text-left">
                                    <div className="col-span">
                                        <p className="text-lg font-bold">Thông tin</p>
                                        <p className="pt-2">Giới thiệu</p>
                                        <p className="pt-2">Liên hệ công ty</p>
                                        <p className="pt-2">Gia nhập BIKEGEAR</p>
                                    </div>
                                    <div className="col-span">
                                        <p className="text-lg font-bold">Chính sách</p>
                                        <p className="pt-2">Chính sách đổi hàng</p>
                                        <p className="pt-2">Chính sách bảo hành</p>
                                        <p className="pt-2">Chính sách hoàn tiền</p>
                                    </div>
                                    <div className="col-span">
                                        <p className="text-lg font-bold">Hỏi đáp</p>
                                        <p className="pt-2">Thanh toán và vận chuyển</p>
                                        <p className="pt-2">Kiểm tra thông tin đơn hàng</p>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="flex-initial flex flex-row mr-8 h-24 w-80 items-center justify-center bg-gray-200 mr-2 border-2 border-black rounded-lg">
                                        <FontAwesomeIcon icon={faList} className="pl-2 h-12" />
                                        <a href="/" className="pl-8">
                                            <p className="text-lg font-bold">Kiểm tra đơn hàng</p>
                                        </a>
                                    </div>
                                    <div className="flex-initial flex flex-row mr-8 h-24 w-80 items-center justify-center bg-gray-200 mr-2 border-2 border-black rounded-lg">
                                        <FontAwesomeIcon icon={faCommentDots} className="pl-2 h-12" />
                                        <a href="/" className="pl-8">
                                            <p className="text-lg font-bold">Góp ý - Than phiền</p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="font-bold text-left">
                                <p className="text-lg">Liên hệ</p>
                                <p className="text-gray-400 pt-2">Tư vấn mua hàng</p>
                                <p className="text-yellow-light pt-2">1900.0009</p>
                                <p className="text-yellow-light pt-2">(T2-T7 8g30 - 21h00)</p>
                                <p className="text-gray-400 pt-2">Hotline góp ý</p>
                                <p className="text-yellow-light pt-2">123.456.7890 (24/7)</p>
                                <p className="text-gray-400 pt-2">Email chăm sóc khách hàng</p>
                                <p className="text-yellow-light pt-2">cskh@bikegear.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-lg">
                    <div className="mx-24">
                        Copyright © 2021 Motorbike Accessory, EC02-02
                    </div>
                </div>
            </footer>
        </div>
    );
}