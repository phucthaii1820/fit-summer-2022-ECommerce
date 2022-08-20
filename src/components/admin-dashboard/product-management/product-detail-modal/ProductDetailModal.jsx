import React, { useEffect, useState } from "react";
import {
    Button,
    Modal,
    Form,
    Input,
    Select,
    Table,
    Image,
    Upload,
    Switch,
    InputNumber,
} from "antd";

import ImgCrop from "antd-img-crop";

import {
    EditOutlined,
    DeleteOutlined,
    FolderOpenOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";

import { updateProduct, deleteProduct } from "@/API/product";

export default function ProductDetailModal(props) {
    const initProduct = props.product;
    const categories = props.categories;

    const [product, setProduct] = useState({
        ...initProduct,
        image: null,
        // comments: undefined,
        // createdAt: undefined,
        // // image: undefined,
        // totalWish: undefined,
        // updatedAt: undefined,
        // __v: undefined,
    });
    const [loading, setLoading] = useState(false);
    const [okLoading, setOkLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [notEditable, setNotEditable] = useState(true);

    const [productTypeForm] = Form.useForm();

    // const [productType, setProductType] = useState(initProduct.type);
    // const [editingKey, setEditingKey] = useState("");

    // const isEditing = (record) => record.key === editingKey;

    const [oldProduct, setOldProduct] = useState({ ...initProduct });

    const [previewImage, setPreviewImage] = useState({
        show: false,
        image: null,
        title: "",
    });

    const [fileList, setFileList] = useState(
        // product.image.map((image, index) => {
        //     return {
        //         uid: index,
        //         name: "image" + index,
        //         status: "done",
        //         url: image,
        //     };
        // })
        []
    );

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

    // const editProductType = (record) => {
    //     productTypeForm.setFieldsValue({
    //         color: record.color,
    //         store_id: record.store_id,
    //         price: record.price,
    //         quantity: record.quantity,
    //         ...record,
    //     });
    //     setEditingKey(record.key);
    // };

    // const cancelProductType = () => {
    //     setEditingKey("");
    // };

    // const saveProductType = async (key) => {
    //     try {
    //         const row = await productTypeForm.validateFields();
    //         const newData = [...productTypeForm];
    //         const index = newData.findIndex((item) => key === item.key);

    //         if (index > -1) {
    //             const item = newData[index];
    //             newData.splice(index, 1, { ...item, ...row });
    //             setProductType(newData);
    //             setEditingKey("");
    //         } else {
    //             newData.push(row);
    //             setProductType(newData);
    //             setEditingKey("");
    //         }
    //     } catch (errInfo) {}
    // };

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = async () => {
        setOkLoading(true);

        // create FormData {/* title description statusPost nameBrand totalWish category image type : color quantity price */}
        const formData = new FormData();
        formData.append("_id", product._id);
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("nameBrand", product.nameBrand);
        formData.append("category", product.category);
        formData.append("type", product.type);
        // For each image in the fileList, add to the formData

        // console.log("product.image", product.image);
        console.log("fileList", fileList);
        if (fileList.fileList.length > 0) {
            fileList.fileList.forEach((file, index) => {
                console.log(file);
                formData.append("image", file.originFileObj);
            });
        }

        for (const value of formData.values()) {
            console.log("value", value);
        }

        // Call Api to Update Product
        const res = await updateProduct(formData);
        if (res.success) {
            setOkLoading(false);
            setVisible(false);
            setNotEditable(true);
        } else {
            Modal.error({
                visible: true,
                title: "Có lỗi xảy ra",
                content: res.message,
            });

            setOkLoading(false);
            setVisible(false);
            setNotEditable(true);
        }
        console.log("res", res);
    };
    // --------------------------------------------------------------------------------------------

    const handleCancel = () => {
        setProduct(oldProduct || {});
        setVisible(false);
        setNotEditable(true);
    };

    const handleDeleteProduct = async () => {
        setLoading(true);

        // Call API to delete product
        const res = await deleteProduct(product._id);
        if (res.success) {
            setLoading(false);
            setVisible(false);
            setNotEditable(false);
        } else {
            Modal.error({
                visible: true,
                title: "Có lỗi xảy ra",
                content: res.message,
            });

            setLoading(false);

            console.log("res", res);
        }

        props.deleteProduct();
    };

    const OnClickDeleteProduct = () => {
        setConfirmVisible(true);
        Modal.confirm({
            visible: confirmVisible,
            title: "Bạn có chắc chắn muốn xóa sản phẩm này?",
            // icon: <DeleteOutlined />,
            okText: "Có",
            cancelText: "Không",
            onOk: () => {
                handleDeleteProduct();
            },
            onCancel: () => {
                setConfirmVisible(false);
            },
            loading: loading,
        });
    };

    const handleEditProduct = () => {
        setNotEditable(false);
        setOldProduct({ ...product });
    };

    const columns = [
        {
            title: "Màu sắc",
            dataIndex: "color",
            key: "color",
            ellipsis: true,
            render: (color, index) => (
                <input
                    type="color"
                    id="head"
                    name="head"
                    defaultValue={color}
                    onBlur={(e) => handleFormChange([e, index], 10)}
                />
            ),
        },
        // {
        //     title: "Chi nhánh",
        //     dataIndex: "store_id",
        //     key: "store_id",
        //     ellipsis: true,
        // },
        {
            title: "Đơn giá",
            dataIndex: "price",
            key: "price",
            ellipsis: true,
            render: (price, index) => (
                <Input
                    disabled={notEditable}
                    defaultValue={price}
                    onBlur={(e) => handleFormChange([e, index], 6)}
                />
            ),
        },
        {
            title: "Số lượng tồn",
            dataIndex: "quantity",
            key: "quantity",
            ellipsis: true,
            render: (quantity, index) => (
                <Input
                    disabled={notEditable}
                    defaultValue={quantity}
                    onBlur={(e) => handleFormChange([e, index], 7)}
                />
            ),
        },
        {
            title: "Xóa",
            key: "delete",
            dataIndex: "_id",
            render: (index) => (
                <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleFormChange(index, 8)}
                />
            ),
        },
    ];

    const onImagePreview = async (file) => {
        file &&
            setPreviewImage({
                show: true,
                image: file.url || file.thumbUrl,
                title: file.name,
            });
    };

    const handleImageChange = (newFileList) => {
        setFileList(newFileList);

        console.log("newFileList", fileList);

        // handleFormChange(newFileList, 11);
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
            case 6:
                var type = product.type;
                type.find((item) => item._id === event[1]._id).price =
                    parseInt(event[0].target.value) || 0;
                setProduct({
                    ...product,
                    type: type,
                });
                break;
            case 7:
                var type = product.type;
                type.find((item) => item._id === event[1]._id).quantity =
                    parseInt(event[0].target.value) || 0;
                setProduct({
                    ...product,
                    type: type,
                });
                break;
            case 8:
                var type = product.type.filter((item) => item._id !== event);
                setProduct({
                    ...product,
                    type: type,
                });
                break;
            case 9:
                setProduct({
                    ...product,
                    type: [
                        ...product.type,
                        {
                            _id: product.type.length + 1,
                            color: "#ffffff",
                            price: 0,
                            quantity: 0,
                            store_id: "",
                        },
                    ],
                });
                break;
            case 10:
                var type = product.type;
                type.find((item) => item._id === event[1]._id).color =
                    event[0].target.value || "#ffffff";
                setProduct({
                    ...product,
                    type: type,
                });
                break;

            // case 11:
            //     setProduct({
            //         ...product,
            //         // For each image in the fileList, append a new atribute to the product object
            //         image: event.map((file) => {
            //             if (file.url != null) return file.url;
            //             else {
            //                 return file.thumbUrl;
            //             }
            //         }),
            //     });
            //     break;

            default:
                break;
        }
        console.log("product: ", product);
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
                    <Button
                        type="danger"
                        loading={loading}
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            OnClickDeleteProduct();
                        }}
                    >
                        Xóa sản phẩm
                    </Button>,
                ]}
            >
                {/* title description statusPost nameBrand totalWish category image type : color quantity price */}
                <Form disabled={notEditable}>
                    <Form.Item required label="Tên sản phẩm">
                        <Input
                            value={product.title}
                            onChange={(e) => handleFormChange(e, 1)}
                        />
                    </Form.Item>
                    <Form.Item required label="Mô tả">
                        <Input.TextArea
                            value={product.description}
                            rows={5}
                            onChange={(e) => handleFormChange(e, 2)}
                        ></Input.TextArea>
                    </Form.Item>

                    <Form.Item label="Trạng thái">
                        <Switch
                            checked={product.statusPost}
                            checkedChildren="Hiện sản phẩm"
                            unCheckedChildren="Ẩn sản phẩm"
                            onChange={(e) => handleFormChange(e, 3)}
                        />
                    </Form.Item>
                    <Form.Item required label="Tên hãng">
                        <Input
                            value={product.nameBrand}
                            onChange={(e) => handleFormChange(e, 4)}
                        />
                    </Form.Item>
                    <Form.Item label="Số lượt thích">
                        <span> {product.totalWish} </span>
                    </Form.Item>
                    <Form.Item required label="Danh mục">
                        <Select
                            value={{
                                value: product.category,
                                label: product.category
                                    ? categories.find(
                                          (category) =>
                                              category._id === product.category
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

                    <Form.Item required label="Ảnh">
                        {notEditable ? (
                            oldProduct.image ? (
                                oldProduct.image.map((image, index) => (
                                    <Image
                                        src={image}
                                        alt="Ảnh sản phẩm"
                                        style={{
                                            width: "102px",
                                            height: "102px",
                                            paddingLeft: "10px",
                                            objectFit: "contain",
                                        }}
                                    />
                                ))
                            ) : (
                                <span></span>
                            )
                        ) : (
                            <ImgCrop aspect={1} quality={1}>
                                <Upload
                                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    // fileList={fileList}
                                    onChange={handleImageChange}
                                    onPreview={onImagePreview}
                                    accept=".png, .jpg, .jpeg"
                                    beforeUpload={() => false}
                                >
                                    Upload
                                </Upload>
                            </ImgCrop>
                        )}
                    </Form.Item>

                    <Form label="Loại" form={productTypeForm} component={false}>
                        <Table
                            dataSource={product.type}
                            columns={columns}
                            // columns={mergedColumns}
                            pagination={false}
                            components={{
                                body: {
                                    cell: EditableCell,
                                },
                            }}
                        />
                        <div>
                            {!notEditable && (
                                <Button
                                    icon={<PlusCircleOutlined />}
                                    onClick={() => handleFormChange(9, 9)}
                                    style={{ align: "right" }}
                                >
                                    Thêm loại sản phẩm
                                </Button>
                            )}
                        </div>
                    </Form>
                </Form>
            </Modal>
            <Modal
                visible={previewImage.show}
                title={previewImage.title}
                footer={null}
                onCancel={() =>
                    setPreviewImage({ ...previewImage, show: false })
                }
            >
                <img
                    alt="example"
                    style={{
                        width: "100%",
                    }}
                    src={previewImage.image}
                />
            </Modal>
        </>
    );
}
