import React, { useState, useEffect } from "react";

import { Table, Image, Button, Modal, Input, Space, message } from "antd";
import { PlusCircleOutlined, EditOutlined } from "@ant-design/icons";

import { getAllCategories } from "@/API/category";
import { getAllProducts, replyComment } from "@/API/product";
import { Link } from "react-router-dom";

export default function CommentManagement() {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const [loading, setLoading] = useState(false);
  const [OkLoading, setOkLoading] = useState(false);

  const [infoVisible, setInfoVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const [productList, setProductList] = useState([]);

  const [isReplied, setIsReplied] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const resCategories = await getAllCategories();
        const resProducts = await getAllProducts();
        setCategories(resCategories);
        setProductList(resProducts.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        message.error(toString(err.message));
      }
    }

    fetchData();
  }, [isReplied]);

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
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
      render: (_, { _id, title }) => (
        <Link to={`/product-detail/${_id}`}>{title}</Link>
      ),
    },

    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      ellipsis: true,
      render: (image) => (
        <Image
          width={100}
          height={100}
          src={image[0]}
          fallback="data:image/png;base64,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"
        />
      ),
    },
  ];

  const handleReply = (productId, commentId, content) => {
    const fetchAPI = async (productId, commentId, content) => {
      setOkLoading(true);

      console.log(productId);
      console.log(commentId);
      console.log(content);

      try {
        const res = await replyComment({
          productId: productId,
          commentId: commentId,
          content: content,
        });

        if (res.success) {
          setOkLoading(false);
          setInfoVisible(false);
          setIsReplied(!isReplied);
        }
      } catch (err) {
        console.log(err);
        message.error(toString(err));
      }
    };

    fetchAPI(productId, commentId, content);
  };

  const onClickShowModalReply = (
    productId,
    commentId,
    replyContent,
    replyType
  ) => {
    let newReplyContent = replyContent;
    Modal.confirm({
      visible: infoVisible,
      title: "Phản hồi",
      content: (
        <Input
          placeholder={
            replyType === "add" ? "Nhập phản hồi mới" : "Nhập phản hồi"
          }
          maxLength={20}
          onChange={(e) => {
            newReplyContent = e.target.value;
          }}
        />
      ),
      okText: replyType === "add" ? "Thêm" : "Sửa",
      cancelText: "Hủy",
      onOk: () => {
        handleReply(productId, commentId, newReplyContent);
      },
      onCancel: () => {
        setInfoVisible(false);
      },
    });
  };

  const expandedRowRender = (product) => {
    const columns = [
      {
        title: "Bình luận",
        dataIndex: "content",
        key: "content",
        ellipsis: true,
      },
      {
        title: "Phản hồi",
        dataIndex: "reply",
        key: "reply",
        ellipsis: true,
      },
      {
        title: "Thao tác",
        dataIndex: "action",
        key: "action",
        ellipsis: true,
        render: (_, record) => (
          <>
            <Button
              icon={record.reply ? <EditOutlined /> : <PlusCircleOutlined />}
              onClick={() => {
                console.log("Prodcut: ", product);

                if (record.reply) {
                  onClickShowModalReply(
                    product._id,
                    record._id,
                    record.reply,
                    "edit"
                  );
                } else {
                  onClickShowModalReply(product._id, record._id, "", "add");
                }
              }}
            >
              {record.reply ? "Chỉnh sửa bình luận" : "Thêm bình luận"}
            </Button>
          </>
        ),
      },
    ];

    const product_comments = product.comments;

    return (
      <Table
        columns={columns}
        dataSource={product_comments}
        pagination={false}
      />
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Space style={{ marginBottom: 16 }} />
          <Table
            columns={columns}
            dataSource={productList}
            onChange={handleChange}
            rowKey={(record) => record._id}
            expandable={{
              expandedRowRender,
              rowExpandable: (record) => record.comments.length > 0,
            }}
          />
        </>
      )}
    </>
  );
}
