import { Button, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import { getStore, updateStore } from "@/API/store";

const { Option } = Select;

const Store = () => {
  const [province, setProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [ward, setWard] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  const fetchData = async () => {
    const res = await getStore();
    setSelectedProvince(
      res?.data[0]?.province === -1 ? null : res?.data[0]?.province
    );
    setSelectedDistrict(
      res?.data[0]?.district === -1 ? null : res?.data[0]?.district
    );
    setSelectedWard(res?.data[0]?.ward === -1 ? null : "" + res?.data[0]?.ward);
    setName(res?.data[0]?.name);
    setAddress(res?.data[0]?.address);
    setId(res?.data[0]?._id);

    console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleUpdate = async () => {
    const data = {
      id,
      name,
      address,
      province: selectedProvince === null ? -1 : selectedProvince,
      district: selectedDistrict === null ? -1 : selectedDistrict,
      ward: selectedWard === null ? -1 : selectedWard,
    };
    const res = await updateStore(data);
    if (res?.success === true) {
      fetchData();
      message.success("Cập nhật thành công");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>Tên cửa hàng</div>
        <Input
          value={name}
          style={{
            // borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>Địa chỉ</div>
        <Input
          value={address}
          style={{
            // borderRadius: "25px",
            padding: "6px 16px",
          }}
          onChange={(e) => setAddress(e.target.value)}
        ></Input>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
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
      <div className="grid grid-cols-2 gap-4 mt-2">
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
      <div className="grid grid-cols-2 gap-4 mt-2">
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
      <Button
        type="primary"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        onClick={handleUpdate}
      >
        Cập nhật Store
      </Button>
    </div>
  );
};

export default Store;
