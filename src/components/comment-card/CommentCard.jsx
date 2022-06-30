import React from "react";

import { Avatar, Card, Skeleton } from "antd";

const { Meta } = Card;

export default function CommentCard(props) {
    const item = {
        name: "Nguyễn Văn A",
        avatar: "https://via.placeholder.com/150",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    return (
        <div>
            <Card
                style={{
                    width: "100%",
                    marginTop: 16,
                }}
            >
                <Meta
                    avatar={
                        <Avatar
                            size={100}
                            src="https://joeschmoe.io/api/v1/random"
                        />
                    }
                    title={item.name}
                    description={item.content}
                />
            </Card>
        </div>
    );
}
