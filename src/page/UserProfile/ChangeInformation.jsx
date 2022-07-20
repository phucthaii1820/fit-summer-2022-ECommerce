import React, { useEffect, useState } from "react";

import { Input, Button, Radio, Select, message, DatePicker } from "antd";

import { getProfileUser, postInfo } from "@/API/user";

export default function ChangeInformation() {
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [ward, setWard] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
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
    if (selectedProvince) {
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
    if (selectedDistrict) {
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

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangeFullname = (event) => {
    setFullname(event.target.value);
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const handleChangeDOB = (date, dateString) => {
    setDateOfBirth(dateString);
  }

  const getUser = async (event) => {
    try {
      const res = await getProfileUser();
      setFullname(res?.user_data?.fullname);
      setEmail(res?.user_data?.email);
      setPhone(res?.user_data?.phone);
      setGender(res?.user_data?.gender);
      setAddress(res?.user_data?.address);
      setSelectedProvince(res?.user_data?.province === -1 ? null : res.user_data.province);
      setSelectedDistrict(res?.user_data?.district === -1 ? null : res.user_data.district);
      setSelectedWard(res?.user_data?.ward === -1 ? null : res.user_data.ward);
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchData = useEffect(() => {
    getUser();
  }, []);

  const updateInfo = async (event) => {
    try {
      const res = await postInfo({ email, fullname, gender, address, province: selectedProvince, district: selectedDistrict, ward: selectedWard });
      message.success("Profile changed successfully!");
    }
    catch (err) {
      console.log(err);
    }
  }

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
            onChange={handleChangeFullname}
            value={fullname}
          ></Input>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Ngày sinh</div>
          <DatePicker
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
            width: "100%"
          }}
          onChange={handleChangeDOB}
          // value={dateOfBirth}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="space-y-1">
          <div className="font-semibold">Số điện thoại</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px"
            }}
            value={phone}
            disabled={true}
          ></Input>
        </div>
        <div className="space-y-1">
          <div className="font-semibold">Email</div>
          <Input
            style={{
              borderRadius: "25px",
              padding: "6px 16px",
            }}
            onChange={handleChangeEmail}
            value={email}
          ></Input>
        </div>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Giới tính</div>
        <Radio.Group className=" mt-1 " onChange={handleChangeGender} value={gender}>
          <Radio value="Nam">Nam</Radio>
          <Radio value="Nữ">Nữ</Radio>
          <Radio value="Khác">Khác</Radio>
        </Radio.Group>
      </div>
      <div className="space-y-1">
        <div className="font-semibold">Số nhà + Tên đường</div>
        <Input
          style={{
            borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={handleChangeAddress}
          value={address}
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
            onSearch={(value) => { }}
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
            onSearch={(value) => { }}
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
            onSearch={(value) => { }}
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
          onClick={updateInfo}
        >
          Cập Nhật
        </Button>
      </div>
    </div>
  );
}
