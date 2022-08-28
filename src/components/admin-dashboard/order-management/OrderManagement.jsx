import React, { useState, useEffect } from "react";
import { getOrdersAdmin, changeStatusOrder } from "@/API/order";
import { Space, Select, Table, Tag, Form, Button, Modal, message } from "antd";
import "src/components/admin-dashboard/AntTable.css";
import OrderDetailModal from "./OrderDetailModel";
import moment from "moment";

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

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    // const [newStatus, setNewStatus] = useState(0);

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            try {
                const res = await getOrdersAdmin();
                console.log(res);
                setOrders(
                    res?.map((order) => ({
                        ...order,
                        phone: order.userId?.phone,
                    }))
                );
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

        if (res?.success) {
            message.success(res?.message);
            setInfoVisible(false);
            setIsChange(!isChange);
        } else {
            message.error(res?.message);
            setInfoVisible(false);
            setIsChange(!isChange);
        }
    };

    // const onClickShowModalStatus = (orderId, oldStatus) => {
    //     let newStatus = oldStatus;
    //     // setNewStatus(oldStatus);

    //     Modal.confirm({
    //         visible: infoVisible,
    //         title: "Cập nhật trạng thái đơn hàng",
    //         content: (
    //             <Select
    //                 defaultValue={{
    //                     value: newStatus,
    //                     label: statusList.find(
    //                         (status) => status.code === newStatus
    //                     ).content,
    //                 }}
    //                 onChange={(e) => {
    //                     newStatus = e;

    //                     // setNewStatus(e);
    //                 }}
    //                 // style={{ width: "200px" }}
    //             >
    //                 {statusList.map((status) => {
    //                     return (
    //                         <Select.Option
    //                             key={status.code}
    //                             value={status.code}
    //                         >
    //                             {status.content}
    //                         </Select.Option>
    //                     );
    //                 })}
    //             </Select>
    //         ),
    //         okText: "Cập nhật",
    //         cancelText: "Hủy",
    //         onOk: () => {
    //             handleChangeStatus(orderId, newStatus);
    //         },
    //         onCancel: () => {
    //             setInfoVisible(false);
    //         },
    //     });
    // };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const columns = [
        {
            title: "Số điện thoại",
            dataIndex: "phone",
            key: "phone",
            ellipsis: true,
        },
        {
            title: "Ngày tạo",
            dataIndex: "createAt",
            key: "createAt",
            ellipsis: true,
            render: (_, record) => {
                return (
                    <div>
                        {moment(record.createAt).format("DD/MM/YYYY HH:mm:ss")}
                    </div>
                );
            },
            sorter: (a, b) =>
                new Date(a.createAt).getTime() - new Date(b.createAt).getTime(),

            sortOrder:
                sortedInfo.columnKey === "createAt" ? sortedInfo.order : null,
        },

        {
            title: "Tổng tiền",
            dataIndex: "total",
            key: "total",
            ellipsis: true,
            render: (_, { total }) => {
                return (
                    <>
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(total)}
                    </>
                );
            },
        },
        {
            title: "Đã thanh toán",
            dataIndex: "payment",
            key: "payment",
            ellipsis: true,
            render: (_, { payment, statusOrder }) => {
                if (payment !== 0 && statusOrder > 0) {
                    return (
                        <Tag color={"green"} key={payment}>
                            Đã thanh toán
                        </Tag>
                    );
                } else {
                    return (
                        <Tag color={"red"} key={payment}>
                            Chưa thanh toán
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
            filters: statusList.map((status) => {
                return {
                    text: status.content,
                    value: status.code,
                };
            }),
            filteredValue: filteredInfo.statusOrder || null,
            onFilter: (value, record) => record.statusOrder === value,
        },
        {
            title: "Hành động",
            dataIndex: "action",
            key: "action",
            ellipsis: true,
            render: (_, record) => (
                // <Button
                //     onClick={() => {
                //         onClickShowModalStatus(record._id, record.statusOrder);
                //     }}
                // >
                //     Cập nhật trạng thái
                // </Button>

                <OrderDetailModal
                    order={record}
                    isChange={() => setIsChange(!isChange)}
                />
            ),
        },
    ];

    return (
        <>
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={clearFilters}>Xóa bộ lọc</Button>
                <Button onClick={clearAll}>Xóa sắp xếp và bộ lọc</Button>
            </Space>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Table
                    columns={columns}
                    dataSource={orders}
                    onChange={handleChange}
                ></Table>
            )}
        </>
    );
}
