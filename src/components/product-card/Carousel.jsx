import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import React, { useEffect, useState } from "react";

import { getListProducts } from "@/API/product";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CarouselProducts = ({ idCategory, nameCategory }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  async function fetchProducts() {
    try {
      const res = await getListProducts(idCategory, 1);
      setData(res.data[0].producs);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="text-xl font-bold pl-2 pb-0">
        <div className="flex">
          <Link to={"/category/" + idCategory} className="flex-1 pl-1">
            {nameCategory}
          </Link>
          <Link
            to={"/category/" + idCategory}
            className="flex-1 text-sm text-right"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
      <Slider {...settings} style={{ cursor: "pointer" }}>
        {data.map((item, index) => (
          <div className="p-2" key={index}>
            <ProductCard
              item={item}
              fetchProductsCard={fetchProducts}
            ></ProductCard>
          </div>
        ))}
        {data.map((item, index) => (
          <div className="p-2" key={index}>
            <ProductCard
              item={item}
              fetchProductsCard={fetchProducts}
            ></ProductCard>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselProducts;
