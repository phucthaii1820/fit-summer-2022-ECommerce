import React from "react";

import { Carousel } from "antd";

export default function Banner() {
    const contentStyle = {
        // height: "40vw",
        width: "vw",
        color: "#fff",
        lineHeight: "40vw",
        // lineWidth: "vw",
        textAlign: "center",
        background: "#364d79",
    };

    return (
        <div>
            {/* Banner  */}
            <Carousel autoplay dotPosition="left">
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
