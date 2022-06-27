import { Input } from 'antd';
import React from 'react';
import AuthLayout from '@/Layout/AuthLayout';

export default function Register_2() {
    return (
        <AuthLayout title={"ĐĂNG KÝ"}>
            <div className="flex flex-col mb-4">
                <p className="font-bold text-base text-left pt-4">Nhập OTP</p>
                <div className="grid grid-cols-6 p-6">
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                    <Input className="bg-gray h-20 w-16 rounded-lg text-center"></Input>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <button
                    type="submit"
                    className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
                >
                    TIẾP THEO
                </button>
            </div>
        </AuthLayout >
    );
}