import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { message, Modal } from "antd";

import AuthLayout from "@/components/Layouts/AuthLayout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import useQuery from "@/utils/query";

import { postRegister } from "@/API/auth";
import { checkExistUser } from "@/API/user";
import { register } from "@/utils/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBokpUSjeQ0zHwS_dL8indmd9tlcfTbbLE",
  authDomain: "biker-gear.firebaseapp.com",
  projectId: "biker-gear",
  storageBucket: "biker-gear.appspot.com",
  messagingSenderId: "61418240192",
  appId: "1:61418240192:web:9bbeb19288940bfa57d525",
  measurementId: "G-NC39DW9BZG",
};

firebase.initializeApp(config);

export default function Register() {
  const queryURL = useQuery();
  const [phone, setEnterPhone] = useState("");
  const [password, setEnterPassword] = useState("");
  const [passwordConfirm, setEnterPassConfirm] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneChange = (event) => {
    setEnterPhone(event.target.value);
  };

  const handlePassChange = (event) => {
    setEnterPassword(event.target.value);
  };

  const handlePassConfirmChange = (event) => {
    setEnterPassConfirm(event.target.value);
  };

  const handleRegister = async (event) => {
    if (password !== passwordConfirm) {
      message.error("Incorrect confirmation password!");
    } else if (phone.length < 10) {
      message.error("Your phone must be longer than 10 characters!");
    } else {
      try {
        const res = await postRegister({
          phone: phone,
          password: password,
          passwordConfirm: passwordConfirm,
        });
        register(res);
        setTimeout(() => {
          window.location.href = queryURL.get("redirect") ?? "/";
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleModal = async () => {
    const user = await checkExistUser({ phone });
    if (password !== passwordConfirm) {
      message.error("Incorrect confirmation password!");
    } else if (phone.length < 10) {
      message.error("Your phone must be longer than 10 characters!");
    } else if (user?.user_data) {
      message.error("Số điện thọai này đã tồn tại!");
    } else {
      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
      });

      firebase
        .auth()
        .signInWithPhoneNumber(`+84${phone}`, verify)
        .then((result) => {
          setResult(result);
        })
        .catch((err) => {
          message.error(err);
        });
      setIsModalVisible(true);
    }
  };

  const ValidateOtp = () => {
    if (otp === null) return;
    result
      .confirm(otp)
      .then(async (result) => {
        try {
          const res = await postRegister({
            phone: phone,
            password: password,
            passwordConfirm: passwordConfirm,
          });
          register(res);
          setTimeout(() => {
            window.location.href = queryURL.get("redirect") ?? "/";
          }, 1000);
        } catch (err) {
          console.log(err);
        }
        message.success("Tạo Tài Khoản Thành Công!");
      })
      .catch((err) => {
        message.error("Incorrect code");
      });
  };
  return (
    <AuthLayout title={"ĐĂNG KÝ"}>
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
        <p className="font-bold text-base text-left">Nhập mật khẩu</p>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
          onChange={handlePassChange}
        />
      </div>

      <div className="flex flex-col mb-4">
        <p className="font-bold text-base text-left">Nhập lại mật khẩu</p>
        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
          onChange={handlePassConfirmChange}
        />
      </div>

      <div className="flex flex-col w-full py-4">
        <button
          type="submit"
          className="py-2 px-4 bg-yellow-light text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          onClick={handleModal}
        >
          ĐĂNG KÝ
        </button>
      </div>

      <div className="grid grid-cols-2">
        <div className="col-span py-2">
          <Link to="/login" className="text-left text-sm text-black font-bold">
            Bạn đã có tài khoản?
          </Link>
        </div>
        <div id="recaptcha-container"></div>
        <div className="col-span py-2">
          <Link to="/login">
            <div className="text-right text-sm font-bold text-black hover:text-yellow-light">
              ĐĂNG NHẬP NGAY
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="pl-2 h-3 text-yellow-light"
              />
            </div>
          </Link>
        </div>
      </div>

      <Modal
        title="Nhập mã xác nhận"
        visible={isModalVisible}
        onOk={ValidateOtp}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <p>
          Vui lòng kiểm tra điện thoại của bạn để tìm mã xác nhận. Mã xác nhận
          có độ dài 6 số.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <input
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            type="text"
            placeholder="Mã xác nhận"
            className="rounded-lg flex-initial w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base"
          />
          <div className="col-span-2">
            <div>Chúng tôi đã gửi mã xác nhận với số điện thoại: {phone}</div>
            <div className="font-semibold"></div>
          </div>
        </div>
      </Modal>

      {/* <p className="font-bold text-2xl text-center">HOẶC</p>

            <div className="grid grid-cols-2 justify-items-center">
                <div className="col-span px-4">
                    <div class="w-52 cursor-pointer border border-black rounded-lg">
                        <a href="/" className="flex flex-row items-center p-4 font-bold text-lg">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/facebook.svg" alt="facebookLogo" />
                            <p className="pl-6 mb-0 text-black hover:text-yellow-light">Facebook</p>
                        </a>
                    </div>
                </div>

                <div className="col-span px-4">
                    <div className="w-52 cursor-pointer border border-black rounded-lg">
                        <a href="/" className="flex flex-row items-center p-4 font-bold text-lg">
                            <img src="https://static.chotot.com/storage/assets/LOGIN/google.svg" alt="googleLogo" />
                            <p className="pl-8 mb-0 text-black hover:text-yellow-light">Google</p>
                        </a>
                    </div>
                </div>
            </div> */}
    </AuthLayout>
  );
}
