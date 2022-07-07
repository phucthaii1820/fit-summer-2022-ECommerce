import React from "react";

import { Carousel } from "antd";

export default function Banner() {
    const contentStyle = {
        height: "576px",
        color: "#fff",
        lineHeight: "576px",
        textAlign: "center",
        background: "#364d79",
    };

    return (
        <div>
            {/* Banner  */}
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
}
