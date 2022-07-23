import { postLogin } from "@/API/auth";
import { login } from "@/utils/auth";

import useQuery from "@/utils/query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "@/components/Layouts/AuthLayout";

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { message, Spin } from "antd";
import Logo from "src/image/Logo.svg";
export default function Login() {
  const queryURL = useQuery();
  const [phone, setEnterPhone] = useState("");
  const [password, setEnterPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 64,
      }}
      spin
    />
  );

  const handlePhoneChange = (event) => {
    setEnterPhone(event.target.value);
  };

  const handlePassChange = (event) => {
    setEnterPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    try {
      setIsLoading(true);
      const res = await postLogin({ phone: phone, password: password });
      login(res);
      console.log(res);
      setTimeout(() => {
        window.location.href = queryURL.get("redirect") ?? "/";
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      message.error(err.response?.data?.message ?? "Login failed");
      console.log(err);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen items-center flex-col">
          <img className="h-14 w-auto mb-8" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />;
        </div>
      ) : (
        <AuthLayout title={"ĐĂNG NHẬP"}>
          <div className="flex flex-col mb-4">
            <p className="font-bold text-base text-left">Số điện thoại</p>
            <input
              type="text"
              className=" rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
              placeholder="Nhập số điện thoại"
              onChange={handlePhoneChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <p className="font-bold text-base text-left">Mật khẩu</p>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
              onChange={handlePassChange}
            />
          </div>

          <div className="flex flex-col w-full py-2">
            <button
              type="submit"
              className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
              onClick={handleLogin}
            >
              ĐĂNG NHẬP
            </button>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span py-2">
              <div className="text-left text-sm font-bold">Quên mật khẩu?</div>
            </div>

            <div className="col-span">
              <Link to="/register">
                <div className="text-right text-black text-sm hover:text-yellow-light font-bold py-2">
                  ĐĂNG KÝ NGAY
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className="pl-2 h-3 text-yellow-light"
                  />
                </div>
              </Link>
            </div>
          </div>
        </AuthLayout>
      )}
    </>
  );
}
