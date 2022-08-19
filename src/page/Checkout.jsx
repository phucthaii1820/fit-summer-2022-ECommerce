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
import userStore from "@/stores/user";
import React, { useEffect, useState } from "react";
import COD from "src/image/checkout/COD.svg";
import Paypal from "src/image/checkout/paypal.png";
import Momo from "src/image/checkout/momo.png";
import CheckoutCard from "@/components/product-card/CheckoutCard";
import { getProductInfo } from "@/API/product";
import { title } from "process";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { creatOrder } from "@/API/order";

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

const Checkout = () => {
  const { user } = userStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [productInfo, setProductInfo] = useState([]);
  const [totalPriceProduct, setTotalPriceProduct] = useState(0);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [service_id, setServiceId] = useState(0);
  const [fee, setFee] = useState(0);
  const [selectPay, setSelectPay] = useState(0);

  useEffect(() => {
    const fetchProductInfo = async () => {
      await Promise.all(
        user?.cart?.map(async (item) => {
          const res = await getProductInfo(item.product_id);
          setProductInfo((prev) => [
            ...prev,
            {
              ...res?.data,
              typeSelect: item.type_id,
              quantitySelect: item.quantity,
              cart_id: item._id,
            },
          ]);
        })
      );
      setIsLoading(false);
    };
    setIsLoading(true);
    setProductInfo([]);
    fetchProductInfo();
  }, [user]);

  useEffect(() => {
    if (productInfo.length > 0) {
      let totalPrice = 0;
      productInfo?.map((itemProduct) => {
        itemProduct?.type?.map((itemType) => {
          if (itemType._id === itemProduct.typeSelect) {
            totalPrice += itemType.price * itemProduct.quantitySelect;
          }
        });
      });
      setTotalPriceProduct(totalPrice);
    }
  }, [productInfo]);

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
    if (user?.province !== -1) {
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
    if (user?.district !== -1) {
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

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(
        `https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services?shop_id=3091698&from_district=1447&to_district=${user?.district}`,
        {
          method: "GET",
          headers: {
            token: "a72f4514-0070-11ed-ad26-3a4226f77ff0",
          },
        }
      );
      const data = await response.json();
      setServiceId(data.data[0].service_id);
    }
    if (user?.district !== -1) {
      fetchAPI();
    }
  }, []);

  useEffect(() => {
    if (service_id !== 0 && totalPriceProduct !== 0) {
      async function fetchAPI() {
        let totalProduct = 0;
        productInfo?.map((itemProduct) => {
          totalProduct += itemProduct.quantitySelect;
        });

        const response = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: "a72f4514-0070-11ed-ad26-3a4226f77ff0",
            },
            body: JSON.stringify({
              service_id: service_id,
              insurance_value: 0,
              coupon: null,
              from_district_id: 1447,
              to_district_id: user?.district,
              to_ward_code: user?.ward + "",
              weight: 2000 * totalProduct,
            }),
          }
        );
        const data = await response.json();
        setFee(data.data.total);
      }

      fetchAPI();
    }
  }, [service_id, totalPriceProduct]);

  const handleClick = async () => {
    let data = {
      ship: fee,
      total: totalPriceProduct + fee,
      payment: selectPay,
      statusOrder: 0,
      products: [],
    };

    productInfo?.map((itemProduct) => {
      const price = itemProduct?.type?.find(
        (type) => type._id == itemProduct.typeSelect
      )?.price;

      data.products.push({
        idProduct: itemProduct._id,
        typeId: itemProduct.typeSelect,
        quantity: itemProduct.quantitySelect,
        priceAtBuy: price,
        total: price * itemProduct.quantitySelect,
      });
    });

    try {
      const res = await creatOrder(data);
      message.success("Tạo đơn hàng thành công");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      message.error("Tạo đơn hàng thất bại");
    }
  };

  return (
    <div>
      <Steps current={1} progressDot={customDot}>
        <Step title="Giỏ hàng" />
        <Step title="Đặt hàng" />
        <Step title="Xác nhận" />
      </Steps>
      <div className="mt-4 text-2xl font-bold uppercase">Đặt hàng</div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div class="col-span-2">
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
            {/* <div className="">
              <div className="col-span-2">Ghi chú</div>
              <Input.TextArea rows={2} />
            </div> */}
          </div>
          <div className="bg-white rounded-md p-6 border mt-2">
            <div className="text-lg font-semibold mb-2">
              Hình thức thanh toán
            </div>
            <div>
              <Radio.Group
                style={{ width: "100%" }}
                value={selectPay}
                onChange={(e) => {
                  setSelectPay(e.target.value);
                }}
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
        <div class="col-span-1">
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
                }).format(totalPriceProduct)}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-semibold">Tiền ship:</div>
              <div>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(fee)}
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
                }).format(fee + totalPriceProduct)}
              </div>
            </div>
          </div>
          <Button
            onClick={handleClick}
            style={{
              width: "100%",
              background: "#F5B301",
              color: "white",
              borderRadius: "0.375rem",
              marginTop: "1rem",
            }}
            disabled={
              user.address == "" ||
              user.ward == -1 ||
              user.district == -1 ||
              user.province == -1
            }
          >
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
