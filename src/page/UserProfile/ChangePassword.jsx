import { postPassword } from "@/API/user";
import { Button, Input, message } from "antd";

import React, { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePass = function validatePassword(pass) {
    var newPassword = pass;
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (
      newPassword.length < minNumberofChars ||
      newPassword.length > maxNumberofChars
    ) {
      return false;
    }
    if (!regularExpression.test(newPassword)) {
      return false;
    }
    return true;
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNewPassChange = (event) => {
    setNewPassword(event.target.value);
  }

  const handlePassConfirmChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleUpdate = async (event) => {
    console.log(password, newPassword)
    if(password === "" || newPassword === "" || confirmPassword === ""){
      message.error("Vui lòng điền đầy đủ thông tin!");
    }
    else if (password === newPassword) {
      message.error("Mật khẩu mới giống với mật khẩu cũ!");
    }
    else if (newPassword !== confirmPassword) {
      message.error("Mật khẩu xác nhận không đúng!")
    } else if(!validatePass(newPassword)){
      message.error("Mật khẩu chứa ít nhất 1 chữ số và 1 kí tự đặc biệt!");
    } else if(newPassword.length < 6 || newPassword.length > 16){
      message.error("Độ dài mật khẩu không hợp lệ!");
    } else {
      try {
        const res = await postPassword({ password: password, newPassword: newPassword });
        message.success("Đổi mật khẩu thành công!");
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="font-semibold">Mật khẩu hiện tại</div>
        <Input
          type="password"
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={handlePasswordChange}
        ></Input>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Nhập mật khẩu mới</div>
        <Input
          type="password"
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={handleNewPassChange}
          placeholder="Nhập 6-16 kí tự gồm 1 số và 1 kí tự đặc biệt"
        ></Input>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Nhập lại mật khẩu mới</div>
        <Input
          type="password"
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={handlePassConfirmChange}
          placeholder="Nhập lại mật khẩu mới"
        ></Input>
      </div>
      <Button
        type="primary"
        style={{
          fontWeight: "500",
          borderRadius: "25px",
        }}
        onClick={handleUpdate}
      >
        Cập Nhật
      </Button>
    </div>
  );
};

export default ChangePassword;
