import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ data }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                {data.map((item) => (
                    <div className="mr-1">
                        <div className="w-32 h-24 border-2 rounded-lg p-2 items-center">
                            <img src={item.image} alt="ProductThumb" className="h-16 w-32"></img>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Gallery;