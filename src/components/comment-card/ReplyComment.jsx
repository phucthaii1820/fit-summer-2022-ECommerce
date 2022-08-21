import { replyComment } from "@/API/product";
import { getProfileUser } from "@/API/user";
import { EditFilled, WechatOutlined } from "@ant-design/icons";
import { Comment, Form, Button, Tooltip, Input } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Gửi bình luận
      </Button>
    </Form.Item>
  </>
);

export default function CommentQA({
  children,
  isChild,
  fetch,
  productId,
}) {
  const [reply, setReply] = useState("");
  const [profileUser, setProfileUser] = useState([]);
  const [replyClick, setReplyClick] = useState(false);
  const [editClick, setEditClick] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setReply(e.target.value);
  };

  const handleRep = async () => {
    if (!reply) {
      return;
    }
    setSubmitting(false);
    try {
      await replyComment({
        productId: productId,
        content: reply,
        commentId: children._id,
      });
      setReply("");
      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    try {
      const resProfile = await getProfileUser();
      setProfileUser(resProfile?.user_data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleReply = () => {
    setReplyClick(!replyClick);
  };

  const handleEdit = () => {
    setEditClick(!editClick);
  };

  const action = [
    <span key="comment-basic-reply-to" onClick={handleReply} className="flex">
      <WechatOutlined className="mr-2 text-base" />
      <div className="text-sm">Phản hồi</div>
    </span>
  ];

  const action2 = [
    <span key="comment-basic-edit-to" onClick={handleEdit} className="flex">
      <EditFilled className="mr-2 text-base" />
      <div className="text-sm">Chỉnh sửa</div>
    </span>
  ];

  return (
    <>
      <Comment
        className="bg-white rounded-lg p-3 shadow-lg"
        author={
          <div className="font-bold text-base">{children?.userId?.fullname}</div>
        }
        content={<div className="border-solid mt-2">{children?.content}</div>}
        datetime={
          <Tooltip title={moment(children?.createdAt).format("DD/MM/YYYY HH:mm:ss")}>
            <div className="mt-1">{moment(children?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</div>
          </Tooltip>
        }
        actions={action}
      ></Comment>
      {isChild ? (
        replyClick ? (
          children.reply ? (
            <Comment
              className="bg-white ml-6 rounded-lg p-3 shadow-lg"
              author={<div className="text-base font-bold">Admin</div>}
              content={<div className="border-solid mt-2">{children.reply}</div>}
              actions={action2}
            ></Comment>
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {isChild && profileUser?.role === 1000 ? (
        replyClick ? (
          !children.reply ? (
            <Comment
              className="bg-white rounded-lg p-3 shadow-lg ml-10 mr-4 mt-3 py-1"
              content={
                <Editor
                  onChange={handleChange}
                  onSubmit={handleRep}
                  submitting={submitting}
                  value={reply}
                />
              }
            />
          ) : editClick ? (
            <Comment
              className="bg-white rounded-lg p-3 shadow-lg ml-10 mr-4 mt-3 py-1"
              content={
                <Editor
                  onChange={handleChange}
                  onSubmit={handleRep}
                  submitting={submitting}
                  value={reply}
                />
              }
            />
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
}
