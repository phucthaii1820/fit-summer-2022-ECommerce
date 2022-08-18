import React, { useEffect } from "react";

import { Comment, Tooltip, Avatar } from "antd";

import { getAllUsers } from "@/API/user";

export default function CommentProduct(props) {
    const commentList = props.commentList;
    const productId = props.productId;

    console.log(commentList);

    const [userList, setUserList] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await getAllUsers();
            setUserList(res.data);
        }
        fetchData();
    }, []);

    return (
        <>
            {commentList &&
                commentList.map((data) => {
                    <Comment
                        actions={[
                            <span key="comment-nested-reply-to">Reply to</span>,
                        ]}
                        author={
                            userList.find((user) => user._id === data.userId)
                                .name
                        }
                        avatar={
                            <Avatar
                                src={
                                    userList.find(
                                        (user) => user._id === data.userId
                                    ).avatar
                                }
                                alt={
                                    userList.find(
                                        (user) => user._id === data.userId
                                    ).name
                                }
                                style={{
                                    backgroundColor: "#87BDE7",
                                    verticalAlign: "middle",
                                }}
                            />
                        }
                        content={<p>{data.content}</p>}
                        // datetime={
                        //     <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        //         <span>{moment().fromNow()}</span>
                        //     </Tooltip>
                        // }
                    >
                        {data.reply && (
                            <Comment content={<p>{data.reply}</p>}></Comment>
                        )}
                    </Comment>;
                })}
        </>
    );
}
