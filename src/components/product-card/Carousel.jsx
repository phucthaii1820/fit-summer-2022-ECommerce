import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react'

import { getListProducts } from '@/API/product';
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CarouselProducts = ({ idCategory, nameCategory }) => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await getListProducts(idCategory, 1);
                setData(res.data[0].producs);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <div className="text-xl font-bold pl-2 pb-0">
                <div className="flex">
                    <Link to={"/category/" + idCategory} className="pl-1">
                        {nameCategory}
                    </Link>
                </div>
            </div>
            <Slider {...settings} style={{ "cursor": "pointer" }}>
                {data.map((item, index) => (
                    <div className="p-2" key={index}>
                        <ProductCard item={item} idCate={idCategory}></ProductCard>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselProducts