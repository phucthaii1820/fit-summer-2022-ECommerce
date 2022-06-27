import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import AuthLayout from '@/components/Layouts/AuthLayout';

export default function Register_3() {
    return (
        <AuthLayout title={"ĐĂNG KÝ"}>
            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left py-4">Nhập mật khẩu</p>
                <Space direction="vertical">
                    <Input.Password
                        placeholder="Nhập mật khẩu"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                    />
                </Space>
            </div>

            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left py-4">Nhập lại mật khẩu</p>
                <Space direction="vertical">
                    <Input.Password
                        placeholder="Nhập lại mật khẩu"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
                    />
                </Space>
            </div>

            <div className="flex flex-col w-full pt-6 pb-4">
                <button
                    type="submit"
                    className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                >
                    ĐĂNG KÝ
                </button>
            </div>
        </AuthLayout >
    );
}