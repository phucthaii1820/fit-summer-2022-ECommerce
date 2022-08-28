import React from "react";

import { Avatar, Card } from "antd";

const { Meta } = Card;

export default function CommentCard(props) {
    const item = props.item;

    return (
        <div className="h-full">
            <Card
                style={{
                    width: "100%",
                    height: "100%"
                }}
            >
                <Meta
                    avatar={
                        <div className="p-1 rounded-full ring-2 ring-yellow-light">
                            <Avatar size={100} src={item?.avatar} />
                        </div>
                    }
                    title={item?.name}
                    description={item?.content}
                />
            </Card>
        </div>
    );
}
