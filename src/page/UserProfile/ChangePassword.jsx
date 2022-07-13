import { postPassword } from "@/API/user";
import { Button, Input, message } from "antd";

import React, { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      message.error("Please fill up fully information!");
    }
    else if (password === newPassword) {
      message.error("New password is the same the old one!");
    }
    else if (newPassword !== confirmPassword) {
      message.error("Incorrect confirmation password!")
    }
    else {
      try {
        const res = await postPassword({ password: password, newPassword: newPassword });
        message.success("Profile changed successfully!");
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
