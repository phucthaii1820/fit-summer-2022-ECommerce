import { Button, Input } from "antd";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="absolute mt-auto bottom-0 w-full bg-black">
            <footer className="">
                <div className="grid grid-cols-3 gap-10 p-16">
                    <div className="text-white text-left rounded px-5">
                        {/* <div className="flex-shrink-0 flex items-center rounded-lg bg-gray-200 shadow-xl">
                            <Link to="/">
                                <img
                                    className="block md:hidden h-5 w-auto"
                                    src="../../image/Logo.svg"
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden md:block h-14 w-auto"
                                    src="../../image/Logo.svg"
                                    alt="Workflow"
                                />
                            </Link>
                        </div> */}
                        <div className="items-center rounded-lg bg-gray pl-16">
                            <img
                                className="block h-20 w-auto"
                                src="../../image/Logo.svg"
                                alt="Workflow"
                            />
                        </div>
                        <p className="text-base font-bold my-5">
                            CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI VÀ DỊCH VỤ TOTO GROUP
                        </p>
                        <div className="my-5">
                            <p>Giấy CNĐKDN: 0316810152 - Ngày cấp: 19/04/2021 - Nơi cấp: Sở Kế Hoạch và Đầu Tư TPHCM</p>
                            <p>Địa chỉ: 304-306 Nguyễn Trãi, Phường 08, Quận 05, Thành phố Hồ Chí Minh - Điện thoại: 028.2220.7878 - Email: cskh@totoday.vn</p>
                        </div>
                        <div className="my-5"></div>
                        <div className="grid grid-cols-2 text-base my-5 font-bold">
                            <div>
                                <p>Tải ngay ứng dụng mua sắm TOTODAY</p>
                            </div>
                            <div>
                                <p>Phương thức thanh toán</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white col-span-2">
                        <div className="rounded-md bg-yellow-light">
                            <div className="p-5 text-left flex">
                                <div className="flex-1">
                                    <p className="text-base font-bold">Đăng ký nhận tin</p>
                                    <p>Nhận tin qua email để không bỏ lỡ các tin tức khuyến mãi</p>
                                </div>
                                <div className="flex-1 flex">
                                    {/* <Search
                                        placeholder="Nhập email của bạn"
                                        allowClear
                                        enterButton="Đăng ký"
                                        size="large"
                                    /> */}
                                    <Input placeholder="Nhập email của bạn" className="flex-auto h-10" />
                                    <Button className="flex-auto bg-black text-white border-white" size="large">Đăng ký</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex my-5">
                            <div className="flex-auto w-72">
                                <div className="grid grid-cols-3 gap-10 text-left">
                                    <div>
                                        <p className="text-base font-bold">Thông tin</p>
                                        <p>Giới thiệu</p>
                                        <p>Liên hệ công ty</p>
                                        <p>Gia nhập TOTODAY</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold">Chính sách</p>
                                        <p>Chính sách đổi hàng</p>
                                        <p>Chính sách bảo hành</p>
                                        <p>Chính sách hoàn tiền</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold">Hỏi đáp</p>
                                        <p>Thanh toán và vận chuyển</p>
                                        <p>Hướng dẫn chọn size</p>
                                        <p>Kiểm tra thông tin đơn hàng</p>
                                    </div>
                                </div>
                                <div className="p-5">

                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="px-5 text-left">
                                    <div>
                                        <p className="text-base font-bold">Mua hàng trực tuyến</p>
                                        <p>1900.633.501 (T2-T6 8g30 - 17h30)</p>
                                        <p>0938.803.633 (24/7)</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold">sales.online@today.vn</p>
                                        <p>Hotline góp ý</p>
                                        <p>0908.18.12.89</p>
                                    </div>
                                    <div>
                                        <p className="text-base font-bold">cskh@totoday.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-lg text-white">
                    <div className="mx-24">
                        Copyright © 2021 Motorbike Accessory, EC02-02
                    </div>
                </div>
            </footer>
        </div>
    );
}