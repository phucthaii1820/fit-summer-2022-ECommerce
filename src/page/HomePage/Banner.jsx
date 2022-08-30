import React from "react";

import { Carousel } from "antd";

export default function Banner() {
    const contentStyle = {
        // height: "40vw",
        width: "vw",
        // color: "#fff",
        lineHeight: "40vw",
        // lineWidth: "vw",
        // textAlign: "center",
        // background: "#364d79",
    };

    return (
        <div>
            {/* Banner  */}
            <Carousel autoplay dotPosition="left" autoplaySpeed={2000}>
                <div>
                    {/* <h3 style={contentStyle}>1</h3> */}
                    <img
                        style={contentStyle}
                        src="https://imgur.com/GLLONMB.png"
                        alt="Banner"
                    />
                </div>
                <div>
                    {/* <h3 style={contentStyle}>2</h3> */}
                    <img
                        style={contentStyle}
                        src="https://imgur.com/5yXu2i8.png"
                        alt="Banner"
                    />
                </div>
                <div>
                    {/* <h3 style={contentStyle}>3</h3> */}
                    <img
                        style={contentStyle}
                        src="https://imgur.com/XXhpsI0.png"
                        alt="Banner"
                    />
                </div>
            </Carousel>
        </div>
    );
}
