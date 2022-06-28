import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from "antd";

import Local from "./local.json";

export default function ChangeInformation() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-1">
          <div className="font-semibold">Họ và Tên</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px",
            }}
          ></Input>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Ngày sinh</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px",
            }}
          ></Input>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-1">
          <div className="font-semibold">Số điện thoại</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px",
            }}
          ></Input>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Email</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px",
            }}
          ></Input>
        </div>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Giới tính</div>
        <Radio.Group className=" mt-1 ">
          <Radio value={1}>Nam</Radio>
          <Radio value={2}>Nữ</Radio>
          <Radio value={3}>Khác</Radio>
        </Radio.Group>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Địa chỉ</div>
        <Input
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
        ></Input>
      </div>
      <div>
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
    </div>
  );
}
