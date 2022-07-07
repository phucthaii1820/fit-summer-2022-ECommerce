import React from "react";

import { Row, Col } from "antd";

import SectionTitle from "./SectionTitle";
import CommentCard from "@/components/comment-card/CommentCard";

export default function CustomerFeedback() {
    const items = [
        {
            name: "Nguyễn Văn A",
            avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
            content:
                "Mình đã mua đồ ở đây 3 lần rồi, mình thấy sản phẩm rất chất lượng, phục vụ rất tốt, nhân viên rất thân thiệt và hiểu khách hàng. Có một lần shop giao nhầm sản phẩm cho mình, mình đã liên lạc với shop để xin đổi trả hàng. Mình thấy nhân viên cửa shop rất rất dễ thương và thân thiện. Yêu shop nhiềuu <3",
        },
        {
            name: "Nguyễn Văn A",
            avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
            content:
                "Sản phẩm rất xinh đẹp tuyệt vời, tôi không thể trông đợi gì hơn. Cảm ơn nhà cung cấp, nhà sản xuất, cảm ơn người bán hàng, cảm ơn sàn thương mại điện tử, cảm ơn người vận chuyển để tôi có cơ hội dùng sản phẩm tốt như thế này.",
        },
        {
            name: "Nguyễn Văn A",
            avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
            content:
                "Hàng đóng gói rất đẹp. Quả nhiên người bán đã gửi gắm rất nhiều tâm tư và tình cảm trong lúc gói hàng. Hộp không có dấu hiệu bị móp, chứng tỏ bộ phận vận chuyển đã nâng như nâng trứng, hứng như hứng hoa. Xin nghiêng mình cảm ơn vì tất cả mọi người.",
        },
        {
            name: "Nguyễn Văn A",
            avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
            content:
                "Thời gian vận chuyển rất hợp lí. Tôi đã đặt hàng với tâm thế hào hứng chờ đợi để được trải nghiệm sản phẩm và tôi không hề bị chờ mỏi cổ. Có thể thấy bên vận chuyển không quản ngại thời tiết và đường xá xa xôi để đưa sản phẩm cho tôi trong thời gian ngắn nhất.",
        },
    ];

    return (
        <div className="py-10">
            <div className="bg-gray-light">
                <SectionTitle title="Khách hàng của BIKERGEAR nghĩ gì" />

                <Row gutter={[16, 16]} style={{ width: "100%" }}>
                    {/* map items with CommentCard  */}
                    {items.map((item) => (
                        <Col span={12}>
                            <CommentCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
