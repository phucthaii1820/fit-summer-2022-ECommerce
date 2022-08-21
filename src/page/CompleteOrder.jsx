import React, { useEffect } from "react";
import { Button, Popover, Spin, Steps } from "antd";
import { CheckCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { changeStatusOrder, pay } from "@/API/order";
import { clearCart } from "@/API/user";
import userStore from "@/stores/user";

const { Step } = Steps;
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

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 64,
    }}
    spin
  />
);

const CompleteOrder = () => {
  const { setCart } = userStore((state) => state);
  const params = new URLSearchParams(window.location.search);
  const extraData = params.get("extraData");
  const message = params.get("message");
  const decodedString = atob(extraData);
  const [linkPay, setLinkPay] = React.useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await pay({ id: decodedString });
        setLinkPay(res.link);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchChangeStatus = async (status) => {
      try {
        const res = await changeStatusOrder({
          id: decodedString,
          statusOrder: status,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const fetchClearCart = async () => {
      try {
        const res = await clearCart();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (message === "Giao dịch bị từ chối bởi người dùng.") {
      fetchChangeStatus(-1);
      fetchAPI();
    } else {
      fetchChangeStatus(1);
      fetchClearCart();
      setCart([]);
    }
  }, []);

  return (
    <div>
      <Steps current={3} progressDot={customDot}>
        <Step title="Giỏ hàng" />
        <Step title="Đặt hàng" />
        <Step title="Thanh toán" />
        <Step title="Hoàn tất đặt hàng" />
      </Steps>
      {message === "Giao dịch bị từ chối bởi người dùng." ? (
        <div className="flex justify-center flex-col items-center">
          <CheckCircleOutlined style={{ fontSize: "400%", color: "#EB5757" }} />
          <div
            className="text-2xl font-bold mt-4"
            style={{
              color: "#EB5757",
            }}
          >
            Thanh toán thất bại
          </div>
          <Button
            style={{
              background: "#F5B301",
              color: "white",
              borderRadius: "0.375rem",
              marginTop: "1rem",
            }}
            href="/"
          >
            Trở về trang chủ
          </Button>
          {linkPay !== "" ? (
            <a href={linkPay}>
              <Button
                style={{
                  width: "100%",
                  background: "#003644",
                  color: "white",
                  borderRadius: "0.375rem",
                  marginTop: "0.5rem",
                }}
              >
                Thanh toán lại
              </Button>
            </a>
          ) : (
            <div className="flex justify-center">
              <Spin indicator={antIcon} />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <CheckCircleOutlined style={{ fontSize: "400%", color: "#00B156" }} />
          <div
            className="text-2xl font-bold mt-4"
            style={{
              color: "#00B156",
            }}
          >
            Thanh toán thành công
          </div>
          <Button
            style={{
              background: "#F5B301",
              color: "white",
              borderRadius: "0.375rem",
              marginTop: "1rem",
            }}
            href="/"
          >
            Trở về trang chủ
          </Button>
        </div>
      )}
    </div>
  );
};

export default CompleteOrder;
