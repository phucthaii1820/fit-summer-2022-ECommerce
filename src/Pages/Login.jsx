import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    return (
        <div className="relative grid grid-cols-4">
            <div className="col-span-3 flex items-center justify-center">
                <div className="max-w-xl w-full">
                    <p className="font-bold text-4xl py-6">ĐĂNG NHẬP</p>
                    <div className="flex flex-col mb-4">
                        <p className="font-bold text-base text-left py-4">Số điện thoại</p>
                        <input
                            type="text"
                            className=" rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <p className="font-bold text-base text-left py-4">Mật khẩu</p>
                        <input
                            type="password"
                            className=" rounded-lg flex-initial w-full appearance-none border border-gray-300 w-3 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>

                    <div className="flex flex-col w-full pt-6 pb-4">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                        >
                            Đăng nhập
                        </button>
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="col-span py-4">
                            <div className="text-left text-sm font-bold">
                                Quên mật khẩu?
                            </div>
                        </div>

                        <div className="col-span py-4">
                            <div className="text-right text-sm font-bold">
                                ĐĂNG KÝ NGAY
                                <FontAwesomeIcon icon={faGreaterThan} className="pl-2 h-3 text-yellow-light"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span bg-yellow-light h-screen">
            </div>
            <div className="absolute right-0">
                <img
                    className="mx-auto w-auto transform -translate-x-24 translate-y-24"
                    src="../../image/Login.svg"
                    alt="LoginImage"
                    style={{ "height": "640px"}}
                />
            </div>
        </div>
    );
}