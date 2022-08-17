import React, { useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    Select,
    Table,
    Space,
    Image,
    Row,
    Col,
    Upload,
    Switch,
    InputNumber,
    Popconfirm,
    Typography,
} from "antd";

import ImgCrop from "antd-img-crop";

import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeInvisibleOutlined,
    FolderOpenOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";

export default function ProductDetailModal(props) {
    const initProduct = props.product;
    const categories = props.categories;

    const [product, setProduct] = useState({ ...initProduct, label: "" });
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [notEditable, setNotEditable] = useState(true);
    const [fileList, setFileList] = useState(product.image);

    const [productTypeForm] = Form.useForm();
    const [productType, setProductType] = useState(initProduct.type);
    const [editingKey, setEditingKey] = useState("");

    const isEditing = (record) => record.key === editingKey;

    // For Edit Type Product --------------------------------------------------------------------------------------------
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Vui lòng nhập ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const editProductType = (record) => {
        productTypeForm.setFieldsValue({
            color: record.color,
            store_id: record.store_id,
            price: record.price,
            quantity: record.quantity,
            ...record,
        });
        setEditingKey(record.key);
        console.log("record.key", record.key);
        console.log("editingKey", editingKey);
    };

    const cancelProductType = () => {
        setEditingKey("");
    };

    const saveProductType = async (key) => {
        try {
            const row = await productTypeForm.validateFields();
            const newData = [...productTypeForm];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setProductType(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setProductType(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const showModal = () => {
        console.log(product.type);
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 3000);
    };

    // --------------------------------------------------------------------------------------------

    const handleCancel = () => {
        setVisible(false);
        setNotEditable(true);
    };

    const handleDeleteProduct = () => {
        setLoading(true);
    };

    const handleEditProduct = () => {
        setNotEditable(false);
    };

    const columns = [
        {
            title: "Màu sắc",
            dataIndex: "color",
            key: "color",
            ellipsis: true,
            render: (color) => (
                <div
                    className="h-4 w-4"
                    style={{ backgroundColor: color }}
                ></div>
            ),
        },
        {
            title: "Chi nhánh",
            dataIndex: "store_id",
            key: "store_id",
            ellipsis: true,
        },
        {
            title: "Đơn giá",
            dataIndex: "price",
            key: "price",
            ellipsis: true,
        },
        {
            title: "Số lượng tồn",
            dataIndex: "quantity",
            key: "quantity",
            ellipsis: true,
        },

        {
            title: "operation",
            dataIndex: "operation",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link
                            onClick={() => saveProductType(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Lưu
                        </Typography.Link>
                        <Popconfirm
                            title="Sure to cancel?"
                            onConfirm={cancelProductType}
                        >
                            <span className="text-red-500">Xóa</span>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link
                        disabled={editingKey !== ""}
                        onClick={() => editProductType(record)}
                    >
                        Chỉnh sửa
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType:
                    col.dataIndex === "quantity" || col.dataIndex === "price"
                        ? "number"
                        : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;

        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = () => resolve(reader.result);
            });
        }

        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const handleFormChange = (event, key) => {
        switch (key) {
            case 1:
                setProduct({
                    ...product,
                    title: event.target.value,
                });
                break;
            case 2:
                setProduct({
                    ...product,
                    description: event.target.value,
                });
                break;
            case 3:
                setProduct({
                    ...product,
                    statusPost: !product.statusPost,
                });
                break;

            case 4:
                setProduct({
                    ...product,
                    nameBrand: event.target.value,
                });
                break;

            case 5:
                setProduct({
                    ...product,
                    category: event,
                });
                break;

            default:
                break;
        }

        console.log(product);
    };

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
                shape="round"
                icon={<FolderOpenOutlined />}
            >
                Chi tiết
            </Button>
            <Modal
                visible={visible}
                title="Thông tin chi tiết"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <>
                        {notEditable === true ? (
                            <Button
                                key="edit"
                                icon={<EditOutlined />}
                                onClick={handleEditProduct}
                            >
                                Sửa thông tin sản phẩm
                            </Button>
                        ) : (
                            <>
                                <Button
                                    key="submit"
                                    icon={<CheckCircleOutlined />}
                                    onClick={handleEditProduct}
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
                    <Button
                        type="danger"
                        loading={loading}
                        icon={<DeleteOutlined />}
                        onClick={handleDeleteProduct}
                    >
                        Xóa sản phẩm
                    </Button>,
                ]}
            >
                {/* title description statusPost nameBrand totalWish category image type : color quantity price */}
                <Form disabled={notEditable}>
                    <Row>
                        <Col>
                            <Form.Item label="Tên sản phẩm">
                                <Input
                                    value={product.title}
                                    onChange={(e) => handleFormChange(e, 1)}
                                />
                            </Form.Item>
                            <Form.Item label="Mô tả">
                                <Input.TextArea
                                    value={product.description}
                                    rows={5}
                                    onChange={(e) => handleFormChange(e, 2)}
                                ></Input.TextArea>
                            </Form.Item>
                        </Col>

                        <Col>
                            <Form.Item label="Trạng thái">
                                <Switch
                                    checked={product.statusPost}
                                    checkedChildren="Hiện sản phẩm"
                                    unCheckedChildren="Ẩn sản phẩm"
                                    onChange={(e) => handleFormChange(e, 3)}
                                />
                            </Form.Item>
                            <Form.Item label="Tên hãng">
                                <Input
                                    value={product.nameBrand}
                                    onChange={(e) => handleFormChange(e, 4)}
                                />
                            </Form.Item>
                            <Form.Item label="Số lượt thích">
                                <span> {product.totalWish} </span>
                            </Form.Item>
                            <Form.Item label="Danh mục">
                                <Select
                                    value={{
                                        value: product.category,
                                        label: product.category
                                            ? categories.find(
                                                  (category) =>
                                                      category._id ===
                                                      product.category
                                              ).name
                                            : "",
                                    }}
                                    onChange={(value) => {
                                        handleFormChange(value, 5);
                                    }}
                                >
                                    {categories.map((category) => (
                                        <Select.Option value={category._id}>
                                            {category.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="Ảnh">
                        {notEditable === true ? (
                            <>
                                {product.image.map((image) => (
                                    <Image
                                        width={100}
                                        height={100}
                                        src={image[0]}
                                        fallback="data:image/png;base64,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"
                                    />
                                ))}
                            </>
                        ) : (
                            <ImgCrop rotate>
                                <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                >
                                    {fileList.length < 5 && "+ Upload"}
                                </Upload>
                            </ImgCrop>
                        )}
                    </Form.Item>
                    {/* <Form.Item label="Loại">
                        <Form form={productTypeForm} component={false}>
                            <Table
                                dataSource={product.type}
                                // columns={columns}
                                columns={mergedColumns}
                                pagination={false}
                                components={{
                                    body: {
                                        cell: EditableCell,
                                    },
                                }}
                            ></Table>
                        </Form>
                    </Form.Item>
                </Form> */}

                    <Form label="Loại" form={productTypeForm} component={false}>
                        <Table
                            dataSource={product.type}
                            // columns={columns}
                            columns={mergedColumns}
                            pagination={false}
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                        ></Table>
                    </Form>
                </Form>
            </Modal>
        </>
    );
}
