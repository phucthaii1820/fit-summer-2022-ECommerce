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
        <div>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
            >
                {/* Họ và Tên  */}
                <Form.Item label="Họ và Tên">
                    <Input />
                </Form.Item>

                {/* Số điện thoại  */}
                <Form.Item label="Số điện thoại">
                    <Input />
                </Form.Item>

                {/* Email  */}
                {/* Ngày sinh  */}
                <Form.Item label="Ngày sinh">
                    <DatePicker className="w-full" />
                </Form.Item>

                {/* Giới tính  */}
                <Form.Item label="Giới tính">
                    <Radio.Group>
                        <Radio value="1"> Nam </Radio>
                        <Radio value="0"> Nữ </Radio>
                        <Radio value="-1"> Khác </Radio>
                    </Radio.Group>
                </Form.Item>

                {/* Địa chỉ  */}
                <Form.Item label="Địa chỉ">
                    <TreeSelect treeData={Local} />
                </Form.Item>

                {/* Số nhà + Tên đường */}
                <Form.Item label="Số nhà + Tên đường">
                    <Input />
                </Form.Item>

                {/* Cập nhật  */}
                <Form.Item label="">
                    <button className="bg-yellow-light hover:bg-yellow-dark text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg
                            className="fill-current w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                        <span>Cập nhật</span>
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
}
