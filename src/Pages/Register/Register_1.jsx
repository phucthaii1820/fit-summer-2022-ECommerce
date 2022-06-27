import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'antd';
import AuthLayout from '@/Layout/AuthLayout';
import { Link } from "react-router-dom"

export default function Register_1() {
    return (
        <AuthLayout title={"ĐĂNG KÝ"}>
            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left py-4">Số điện thoại</p>
                <Input
                    type="text"
                    className=" rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                    placeholder="Nhập số điện thoại"
                />
            </div>

            <div className="flex flex-col w-full pt-6 pb-4">
                <button
                    type="submit"
                    className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                >
                    TIẾP THEO
                </button>
            </div>

            <div className="grid grid-cols-2">
                <div className="col-span py-4">
                    <Link to="/login" className="text-left text-sm font-bold">
                        Bạn đã có tài khoản?
                    </Link>
                    
                </div>

                <div className="col-span py-4">
                    <Link to="/login">
                        <div className="text-right text-sm font-bold">
                            ĐĂNG NHẬP NGAY
                            <FontAwesomeIcon icon={faGreaterThan} className="pl-2 h-3 text-yellow-light" />
                        </div>
                    </Link>
                </div>
            </div>

            <p className="font-bold text-2xl text-center py-6">HOẶC</p>

            <div className="grid grid-cols-2">
                <div className="col-span py-4 px-4">
                    <div class="w-64 cursor-pointer border-2 border-black rounded-lg">
                        <a href="/" className="flex flex-row items-center p-4 font-bold text-lg">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="facebookLogo" />
                            <p className="pl-8">Facebook</p>
                        </a>
                    </div>
                </div>

                <div className="col-span py-4 px-4">
                    <div class="w-64 cursor-pointer border-2 border-black rounded-lg">
                        <a href="/" className="flex flex-row items-center p-4 font-bold text-lg">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="googleLogo" />
                            <p className="pl-8">Google</p>
                        </a>
                    </div>
                </div>
            </div>
        </AuthLayout >
    );
}