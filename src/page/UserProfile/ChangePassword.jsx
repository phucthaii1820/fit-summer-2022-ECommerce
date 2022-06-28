import { Button, Input } from "antd";
import React from "react";

const ChangePassword = () => {
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
        ></Input>
      </div>
      <Button
        type="primary"
        style={{
          fontWeight: "500",
          borderRadius: "25px",
        }}
      >
        Cập Nhật
      </Button>
    </div>
  );
};

export default ChangePassword;
