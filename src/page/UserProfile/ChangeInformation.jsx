import React, { useEffect, useState } from "react";
import { Input, Button, Radio, Select } from "antd";

export default function ChangeInformation({ userData }) {
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [ward, setWard] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const { Option } = Select;

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
        {
          method: "GET",
          headers: {
            token: "a72f4514-0070-11ed-ad26-3a4226f77ff0",
          },
        }
      );
      const data = await response.json();
      setProvince(data.data);
    }
    fetchAPI();
  }, []);

  useEffect(() => {
    if (selectedProvince !== -1) {
      async function fetchAPI() {
        const response = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${selectedProvince}`,
          {
            method: "GET",
            headers: {
              token: "a72f4514-0070-11ed-ad26-3a4226f77ff0",
            },
          }
        );
        const data = await response.json();
        setDistrict(data.data);
      }
      fetchAPI();
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict !== -1) {
      async function fetchAPI() {
        const response = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${selectedDistrict}`,
          {
            method: "GET",
            headers: {
              token: "a72f4514-0070-11ed-ad26-3a4226f77ff0",
            },
          }
        );
        const data = await response.json();
        setWard(data.data);
      }
      fetchAPI();
    }
  }, [selectedDistrict]);

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
        <div className="font-semibold">Số nhà + Tên đường</div>
        <Input
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
        ></Input>
      </div>
      <div className="grid grid-cols-3 gap-16">
        <div className="space-y-1">
          <div className="font-semibold">Tỉnh/Thành Phố</div>
          <Select
            value={selectedProvince}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(value) => {
              setSelectedProvince(value);
              setSelectedDistrict(null);
              setSelectedWard(null);
            }}
            onSearch={(value) => {}}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
            style={{
              width: "100%",
            }}
          >
            {province?.map((item, index) => (
              <Option key={index} value={item.ProvinceID}>
                {item.ProvinceName}
              </Option>
            ))}
          </Select>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Quận/Huyện</div>
          <Select
            value={selectedDistrict}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(value) => {
              setSelectedDistrict(value);
              setSelectedWard(null);
            }}
            onSearch={(value) => {}}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
            style={{
              width: "100%",
            }}
          >
            {district?.map((item, index) => (
              <Option key={index} value={item.DistrictID}>
                {item.DistrictName}
              </Option>
            ))}
          </Select>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Phường/Xã</div>
          <Select
            value={selectedWard}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(value) => {
              setSelectedWard(value);
            }}
            onSearch={(value) => {}}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
            style={{
              width: "100%",
            }}
          >
            {ward?.map((item, index) => (
              <Option key={index} value={item.WardCode}>
                {item.WardName}
              </Option>
            ))}
          </Select>
        </div>
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
