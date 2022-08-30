import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Modal,
    Button,
    message,
    Descriptions,
    Select,
    Tooltip,
    Table,
    Image,
} from "antd";
import { changeStatusOrder } from "@/API/order";
import {
    FolderOpenOutlined,
    EditOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
} from "@ant-design/icons";

import moment from "moment";

export default function OrderDetailModal(props) {
    const statusList = [
        {
            code: -1,
            // content: "Payment Failed"
            content: "Thanh toán thất bại",
            color: "red",
        },
        {
            code: 0,
            // content: "Create Order Successul",
            content: "Tạo đơn hàng thành công",
            color: "blue",
        },
        {
            code: 1,
            // content: "Wait for Confirmation",
            content: "Chờ xác nhận",
            color: "gold",
        },
        {
            code: 2,
            // content: "Confirmed",
            content: "Đã xác nhận",
            color: "cyan",
        },
        {
            code: 3,
            // content: "Delivery",
            content: "Đang giao hàng",
            color: "lime",
        },
        {
            code: 4,
            // content: "Completed",
            content: "Đã giao hàng",
            color: "green",
        },
    ];

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "idProduct.title",
            key: "idProduct.title",
            // ellipsis: true,
            // render: (_, record) => <div>{record.idProduct.title}</div>,
            render: (_, record) => (
                <Link to={`/product-detail/${record.idProduct._id}`}>
                    {record.idProduct.title}
                </Link>
            ),
        },

        {
            title: "Ảnh sản phẩm",
            dataIndex: "idProduct.image",
            key: "idProduct.image",
            // ellipsis: true,
            render: (_, record) => (
                <Image src={record.idProduct.image[0]}></Image>
            ),
        },

        {
            title: "Giá lúc mua",
            dataIndex: "priceAtBuy",
            key: "priceAtBuy",
            // ellipsis: true,
            render: (_, record) => (
                <>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(record.priceAtBuy)}
                </>
            ),
        },

        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
            // ellipsis: true,
        },

        {
            title: "Thành tiền",
            dataIndex: "total",
            key: "total",
            // ellipsis: true,
            render: (_, record) => (
                <>
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(record.total)}
                </>
            ),
        },
        {
            title: "Loại",
            dataIndex: "typeID",
            key: "typeID",
            // ellipsis: true,
        },
    ];

    const order = props.order;

    const [status, setStatus] = useState(order.statusOrder);
    const [okLoading, setOkLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [notEditable, setNotEditable] = useState(true);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleOk = async () => {
        const orderId = order._id;
        const statusCode = status;

        console.log(orderId, statusCode);

        setOkLoading(true);

        const res = await changeStatusOrder({
            id: orderId,
            statusOrder: parseInt(statusCode),
        });

        if (res?.success) {
            message.success(res?.message);
            setVisible(false);
            props.isChange();
            setOkLoading(false);
        } else {
            message.error(res?.message);
            setVisible(false);
            props.isChange();
            setOkLoading(false);
        }
    };

    const handleEditOrder = () => {
        setNotEditable(false);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={() => {
                    showModal();
                }}
                shape="round"
                icon={<FolderOpenOutlined />}
            >
                Chi tiết
            </Button>

            <Modal
                width={1000}
                visible={visible}
                title="Thông tin chi tiết"
                onCancel={() => {
                    handleCancel();
                }}
                footer={[
                    <>
                        {notEditable === true ? (
                            <Button
                                key="edit"
                                icon={<EditOutlined />}
                                onClick={handleEditOrder}
                            >
                                Cập nhật trạng thái
                            </Button>
                        ) : (
                            <>
                                <Button
                                    key="submit"
                                    icon={<CheckCircleOutlined />}
                                    onClick={handleOk}
                                    loading={okLoading}
                                    type="primary"
                                >
                                    Cập nhật
                                </Button>

                                <Button
                                    key="back"
                                    icon={<CloseCircleOutlined />}
                                    onClick={handleCancel}
                                >
                                    Hủy thay đổi
                                </Button>
                            </>
                        )}
                    </>,
                ]}
            >
                <Descriptions title="Thông tin đơn hàng" column={1}>
                    <Descriptions.Item label="Mã đơn hàng">
                        {order?._id}
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày đặt hàng">
                        {/* {order?.createdAt} */}
                        {moment(order?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tổng tiền">
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(order?.total)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Trạng thái">
                        {!notEditable ? (
                            <>
                                <Select
                                    defaultValue={{
                                        value: status,
                                        label: statusList.find(
                                            (status) =>
                                                status.code ===
                                                order.statusOrder
                                        ).content,
                                    }}
                                    onChange={(e) => {
                                        setStatus(e);
                                    }}
                                    // style={{ width: "200px" }}
                                >
                                    {statusList.map((status) => {
                                        return (
                                            <Select.Option
                                                key={status.code}
                                                value={status.code}
                                            >
                                                {status.content}
                                            </Select.Option>
                                        );
                                    })}
                                </Select>
                            </>
                        ) : (
                            <span>
                                {
                                    statusList.find(
                                        (status) =>
                                            status.code === order.statusOrder
                                    ).content
                                }
                            </span>
                        )}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tiền ship">
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(order?.ship)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Người dặt hàng">
                        <Tooltip
                            width={600}
                            color="gold"
                            title={
                                <Descriptions column={1}>
                                    <Descriptions.Item label="Họ và tên">
                                        {order?.userId?.fullnam}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Ngày sinh">
                                        {order?.userId?.dob}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Số điện thoại">
                                        {order?.userId?.phone}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Email">
                                        {order?.userId?.email}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Số nhà + Tên đường">
                                        {order?.userId?.address}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Tỉnh/Thành phố">
                                        {order?.userId?.province}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Quận/Huyện">
                                        {order?.userId?.district}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Xã/Phường">
                                        {order?.userId?.ward}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Số CMND">
                                        {order?.userId?.cmnd}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Vai trò">
                                        {order?.userId?.role === 1000
                                            ? "Amin"
                                            : "User"}
                                    </Descriptions.Item>
                                </Descriptions>
                            }
                            overlayStyle={{ lineBreak: "anywhere" }}
                        >
                            <span className="underline text-yellow-light">
                                {order?.userId?.phone}
                            </span>
                        </Tooltip>
                    </Descriptions.Item>
                    <Descriptions.Item label="Danh sách sản phẩm"></Descriptions.Item>
                </Descriptions>
                <Table
                    columns={columns}
                    dataSource={order?.products}
                    pagination={false}
                />
            </Modal>
        </>
    );
}
