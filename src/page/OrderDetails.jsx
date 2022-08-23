import {
  Button,
  Input,
  message,
  Popover,
  Radio,
  Space,
  Spin,
  Steps,
} from "antd";
import React, { useEffect, useState } from "react";
import COD from "src/image/checkout/COD.svg";
import Paypal from "src/image/checkout/paypal.png";
import Momo from "src/image/checkout/momo.png";
import CheckoutCard from "@/components/product-card/CheckoutCard";
import { getProductInfo } from "@/API/product";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getOrderID } from "@/API/order";
import { useParams } from "react-router-dom";
import moment from "moment";
import userStore from "@/stores/user";

const { Step } = Steps;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 64,
    }}
    spin
  />
);

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const OrderDetails = () => {
  const { idOrder } = useParams();
  const { user } = userStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const resOrder = await getOrderID(idOrder);
        setOrder(resOrder);
        setStep(resOrder?.statusOrder);
        await Promise.all(
          resOrder?.products?.map(async (item) => {
            const res = await getProductInfo(item.idProduct);
            setProductInfo((prev) => [
              ...prev,
              {
                ...res?.data,
                typeSelect: item.typeId,
                quantitySelect: item.quantity,
              },
            ]);
          })
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setIsLoading(true);
    fetchOrder();
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
    if (typeof user.province !== "undefined" && user?.province !== -1) {
      async function fetchAPI() {
        const response = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${user?.province}`,
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
  }, []);

  useEffect(() => {
    if (typeof user.district !== "undefined" && user?.district !== -1) {
      async function fetchAPI() {
        const response = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${user?.district}`,
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
  }, []);

  const orderStatus = (status) => {
    switch (status) {
      case -1:
        return "Thanh toán thất bại";
      case 0:
        return "Tạo đơn hàng thành công";
      case 1:
        return "Chờ xác nhận";
      case 2:
        return "Đã xác nhận";
      case 3:
        return "Đang giao hàng";
      case 4:
        return "Đã giao hàng";
    }
  };

  return (
    <div>
      {step !== -1 ? (
        <Steps current={step} progressDot={customDot}>
          <Step title="Đặt hàng thành công" />
          <Step title="Chờ xác nhận" />
          <Step title="Đã xác nhận" />
          <Step title="Đang giao hàng" />
          <Step title="Đã giao hàng" />
        </Steps>
      ) : null}

      <div className="flex mt-4 text-2xl font-bold uppercase">
        Đơn hàng&nbsp;|&nbsp;
        <div className="mt-2 text-yellow-light text-xl font-bold uppercase">
          {orderStatus(order?.statusOrder)}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className=" bg-white rounded-md p-6 border">
            <div className="text-lg font-semibold mb-2">Giao Tới</div>
            <div className="grid grid-cols-3 gap-4 mb-1">
              <div className="col-span-1">Tên người nhận:</div>
              <div className="col-span-2">{user.fullname}</div>
            </div>
            <div className="grid grid-cols-3 gap-4  mb-1">
              <div className="col-span-1">Số điện thoại:</div>
              <div className="col-span-2">{user.phone}</div>
            </div>
            <div className="grid grid-cols-3 gap-4  mb-1">
              <div className="col-span-1">Địa chỉ nhận hàng:</div>
              {user.address == "" ||
              user.ward == -1 ||
              user.district == -1 ||
              user.province == -1 ? (
                <Link to="/profile/change-info" className="col-span-2">
                  Bạn chưa xác nhận địa chỉ (bấm vào đây để xác nhận)
                </Link>
              ) : (
                <div className="col-span-2">
                  {user.address} -{" "}
                  {ward?.map((item) => {
                    if (item?.WardCode == user.ward) return item.WardName;
                  })}{" "}
                  -{" "}
                  {district?.map((item) => {
                    if (item?.DistrictID == user.district)
                      return item.DistrictName;
                  })}{" "}
                  -{" "}
                  {province?.map((item) => {
                    if (item?.ProvinceID == user.province)
                      return item.ProvinceName;
                  })}
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4  mb-1">
              <div className="col-span-1">Ngày đặt hàng:</div>
              <div className="col-span-2">
                {moment(order?.createAt).format("DD/MM/YYYY HH:mm:ss", true)}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-6 border mt-2">
            <div className="text-lg font-semibold mb-2">
              Hình thức thanh toán
            </div>
            <div>
              <Radio.Group
                style={{ width: "100%" }}
                value={order?.payment}
                disabled={false}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div className="border-gray-300 p-3 border w-full rounded-lg">
                    <Radio
                      value={0}
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <div className="flex items-center">
                        <img className="h-8 w-auto mx-4" src={COD} alt="cod" />
                        <div>
                          <div>COD</div>
                          <div>Thanh toán khi nhận hàng</div>
                        </div>
                      </div>
                    </Radio>
                  </div>
                  <div className="border-gray-300 p-3 border w-full rounded-lg">
                    <Radio
                      value={2}
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <div className="flex items-center">
                        <img className="h-8 w-auto mx-4" src={Momo} alt="cod" />
                        <div>
                          <div>Momo</div>
                          <div>Thanh toán bằng ví Momo</div>
                        </div>
                      </div>
                    </Radio>
                  </div>
                  <div className="border-gray-300 p-3 border w-full rounded-lg">
                    <Radio
                      value={1}
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <div className="flex items-center">
                        <img
                          className="h-8 w-auto mx-4"
                          src={Paypal}
                          alt="cod"
                        />
                        <div>
                          <div>Paypal</div>
                          <div>Thanh toán bằng ví Paypal</div>
                        </div>
                      </div>
                    </Radio>
                  </div>
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className=" bg-white rounded-md p-6 border">
            <div className="text-lg font-semibold mb-2">Thông tin đơn hàng</div>
            <div>
              {isLoading ? (
                <div className="flex justify-center">
                  <Spin indicator={antIcon} />
                </div>
              ) : (
                <>
                  {productInfo.map((item, index) => (
                    <CheckoutCard
                      id={item._id}
                      key={index}
                      img={item?.image[0]}
                      title={item.title}
                      quantity={item.quantitySelect}
                      color={
                        item?.type?.find((type) => type._id == item.typeSelect)
                          ?.color
                      }
                      price={
                        item?.type?.find((type) => type._id == item.typeSelect)
                          ?.price
                      }
                    />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className=" bg-white rounded-md p-6 border">
            <div className="flex justify-between">
              <div className="font-semibold mb-1">Tổng tiền hàng:</div>
              <div>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order?.total - order?.ship)}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Tiền ship:</div>
              <div>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order?.ship)}
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md p-6 border">
            <div className="flex justify-between">
              <div className="text-lg font-semibold mb-1">Tổng chi phí:</div>
              <div>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(order?.total)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
