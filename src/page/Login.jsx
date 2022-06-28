import { postLogin } from '@/API/auth';
import { login } from '@/utils/auth';

import useQuery from '@/utils/query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '@/components/Layouts/AuthLayout'

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    //const queryURL = useQuery();
    const [phone, setEnterPhone] = useState("");
    const [password, setEnterPassword] = useState("");

    const handlePhoneChange = (event) => {
        setEnterPhone(event.target.value);
    }

    const handlePassChange = (event) => {
        setEnterPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        try {
            const res = await postLogin({ phone: phone, password: password });
            login(res);
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthLayout title={"ĐĂNG NHẬP"}>
            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left py-4">Số điện thoại</p>
                <Input
                    type="text"
                    className=" rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                    placeholder="Nhập số điện thoại"
                    onChange={handlePhoneChange}
                />
            </div>

            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left py-4">Mật khẩu</p>
                <Space direction="vertical">
                    <Input.Password
                        placeholder="Nhập mật khẩu"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                        onChange={handlePassChange}
                    />
                </Space>
            </div>

            <div className="flex flex-col w-full pt-6 pb-4">
                <button
                    type="submit"
                    className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                    onClick={handleLogin}
                >
                    ĐĂNG NHẬP
                </button>
            </div>

            <div className="grid grid-cols-2">
                <div className="col-span py-4">
                    <div className="text-left text-sm font-bold">
                        Quên mật khẩu?
                    </div>
                </div>

                <div className="col-span py-4">
                    <Link to="/register" >
                        <div className="text-right text-sm font-bold">
                            ĐĂNG KÝ NGAY
                            <FontAwesomeIcon icon={faGreaterThan} className="pl-2 h-3 text-yellow-light" />
                        </div>
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}