import React, { useState, useEffect } from "react";
import { getOrdersAdmin, changeStatusOrder } from "@/API/order";
import { Select, Table, Tag, Form, Button, Modal } from "antd";

export default function OrderManagement() {
    const statusList = [
        { code: -1, content: "Payment Failed" },
        {
            code: 0,
            content: "Create Order Successul",
        },
        {
            code: 1,
            content: "Wait for Confirmation",
        },
        {
            code: 2,
            content: "Confirmed",
        },
        {
            code: 3,
            content: "Delivery",
        },
        {
            code: 4,
            content: "Completed",
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
            title: "Đã thanh toán",
            dataIndex: "payment",
            key: "payment",
            ellipsis: true,
            render: (_, { payment }) => {
                if (payment === 1) {
                    return (
                        <Tag color={"green"} key={payment}>
                            Rồi
                        </Tag>
                    );
                } else {
                    return (
                        <Tag color={"red"} key={payment}>
                            Chưa
                        </Tag>
                    );
                }
            },
        },
        {
            title: "Trạng thái",
            dataIndex: "statusOrder",
            key: "statusOrder",
            ellipsis: true,
            render: (_, record) => (
                <div>
                    {
                        statusList.find(
                            (status) => status.code === record.statusOrder
                        ).content
                    }
                </div>
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
