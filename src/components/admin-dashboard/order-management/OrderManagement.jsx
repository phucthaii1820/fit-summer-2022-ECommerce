import React, { useState, useEffect } from "react";
import { getOrdersAdmin, changeStatusOrder } from "@/API/order";
import { Select, Table, Tag, Button, Modal, message } from "antd";

export default function OrderManagement() {
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

    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    // const [newStatus, setNewStatus] = useState(0);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            try {
                const res = await getOrdersAdmin();
                console.log(res);
                setOrders(res);
                setLoading(false);
            } catch (error) {
                console.log(error);
                message.error(toString(error.message));
            }
        }
        fetchData();
    }, [isChange]);

    const handleChangeStatus = async (orderId, statusCode) => {
        console.log(orderId, statusCode);

        const res = await changeStatusOrder({
            id: orderId,
            statusOrder: parseInt(statusCode),
        });

        if (res) {
            setInfoVisible(false);
            setIsChange(!isChange);
        }
    };

    const onClickShowModalStatus = (orderId, oldStatus) => {
        let newStatus = oldStatus;
        // setNewStatus(oldStatus);

        Modal.confirm({
            visible: infoVisible,
            title: "Cập nhật trạng thái đơn hàng",
            content: (
                <Select
                    defaultValue={{
                        value: newStatus,
                        label: statusList.find(
                            (status) => status.code === newStatus
                        ).content,
                    }}
                    onChange={(e) => {
                        newStatus = e;

                        // setNewStatus(e);
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
            ),
            okText: "Cập nhật",
            cancelText: "Hủy",
            onOk: () => {
                handleChangeStatus(orderId, newStatus);
            },
            onCancel: () => {
                setInfoVisible(false);
            },
        });
    };

    const columns = [
        {
            title: "Ngày tạo",
            dataIndex: "createAt",
            key: "createAt",
            ellipsis: true,
        },
        {
            title: "Tổng tiền",
            dataIndex: "total",
            key: "total",
            ellipsis: true,
        },
        {
            title: "Phương thức thanh toán",
            dataIndex: "payment",
            key: "payment",
            ellipsis: true,
            render: (_, { payment }) => {
                if (payment === 0) {
                    return <Tag color="orange">COD</Tag>;
                } else if (payment === 1) {
                    return <Tag color="blue">Paypal</Tag>;
                } else {
                    return <Tag color="pink">Momo</Tag>;
                }
            },
        },

        {
            title: "Đã thanh toán",
            dataIndex: "",
            key: "",
            ellipsis: true,
            render: (_, record) => {
                if (
                    record.payment === 0 ||
                    (record.payment !== 0 && record.statusOrder < 1)
                ) {
                    return <Tag color={"green"}>Đã thanh toán</Tag>;
                } else {
                    return <Tag color={"red"}>Chưa thanh toán</Tag>;
                }
            },
        },
        {
            title: "Trạng thái",
            dataIndex: "statusOrder",
            key: "statusOrder",
            ellipsis: true,
            render: (_, record) => (
                <Tag
                    color={
                        statusList.find(
                            (status) => status.code === record.statusOrder
                        ).color
                    }
                >
                    {
                        statusList.find(
                            (status) => status.code === record.statusOrder
                        ).content
                    }
                </Tag>
            ),
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            ellipsis: true,
            render: (_, record) => (
                <Button
                    onClick={() => {
                        onClickShowModalStatus(record._id, record.statusOrder);
                    }}
                >
                    Cập nhật trạng thái
                </Button>
            ),
        },
    ];

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Table columns={columns} dataSource={orders}></Table>
            )}
        </>
    );
}
