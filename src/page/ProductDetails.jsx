import { Breadcrumb, Radio, Spin } from "antd";
import {
  HeartOutlined,
  LoadingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";

import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";
import { getProductInfo } from "@/API/product";
import CarouselProducts from "@/components/product-card/Carousel";
import { useParams } from "react-router-dom";
import { getCategoryInfo } from "@/API/category";

const ProductDetails = () => {
  const { idProduct, idCate } = useParams();
  const [category, setCategory] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState("0");
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let slider1 = [];
  let slider2 = [];

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 64,
      }}
      spin
    />
  );

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const onChangeRadio = (e) => {
    setSelectedType(e.target.value);
  };

  const onClickThumb = (e) => {
    setSelectedThumb(e.target.value);
  };

  useEffect(() => {
    async function fetchCategory() {
      try {
        const res = await getCategoryInfo(idCate);
        setCategory(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await getProductInfo(idProduct);
        setProduct(res?.data);
        setType(res?.data?.type);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  }, []);

  var settingThumbs = {
    dots: false,
    arrows: true,
    infinite: false,
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
    <>
      {isLoading ? (
        <div className="flex justify-center h-screen items-center flex-col">
          <img className="h-14 w-auto mb-8" src={Logo} alt="Workflow" />
          <Spin indicator={antIcon} />;
        </div>
      ) : (
        <div className="py-6">
          <div className="container m-auto">
            <div className="px-16">
              <Breadcrumb style={{ fontSize: "1rem" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{category?.name}</Breadcrumb.Item>
                <Breadcrumb.Item>{product?.title}</Breadcrumb.Item>
              </Breadcrumb>

              <div className="py-8">
                <div className="grid grid-cols-3 gap-20">
                  <div className="col-span">
                    <div className="mb-8">
                      <Slider
                        asNavFor={nav2}
                        ref={(slider) => (slider1 = slider)}
                        arrows={false}
                        className="h-full"
                      >
                        {product?.image?.map((item, index) => (
                          <div className="" key={index}>
                            <div className="border-2 rounded-lg p-2 ">
                              <img
                                src={item}
                                alt="ProductThumb"
                                className="object-cover w-full h-full"
                              ></img>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                    <div>
                      <Slider
                        asNavFor={nav1}
                        ref={(slider) => (slider2 = slider)}
                        {...settingThumbs}
                        // onClick={onClickThumb}
                        // value={selectedThumb}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                        {product?.image?.map((item, index) => (
                          <div className="mr-1" key={index}>
                            <div className="w-32 h-24 border-2 rounded-lg p-2 items-center cursor-pointer">
                              <img
                                src={item}
                                alt="ProductThumb"
                                className="object-cover h-16 w-32"
                              ></img>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>

                  <div className="col-span-2 text-base">
                    <div className="text-3xl font-bold">
                      <span className="text-3xl font-bold">
                        {product?.title}
                      </span>
                    </div>
                    <div className="flex mt-3">
                      <p className="text-xl text-red-500 font-bold">
                        {type[selectedType]?.price}&nbsp;₫
                      </p>
                    </div>

                    <hr className="mb-5 border-yellow-light border-dashed"></hr>

                    <div className="flex mb-4">
                      <p className="mt-3 mr-8 font-bold">
                        Chọn màu cho sản phẩm:{" "}
                      </p>
                      <Radio.Group
                        className="mt-1"
                        onChange={onChangeRadio}
                        optionType="button"
                        value={selectedType}
                      >
                        {type.map((item, index) => (
                          <Radio
                            key={index}
                            value={index}
                            style={{
                              marginRight: "20px",
                              height: "50px",
                              backgroundColor: "#F1F1F1",
                            }}
                          >
                            <div className="flex mt-2 justify-center items-center">
                              <div
                                className="mr-2 h-4 w-4"
                                style={{ backgroundColor: item?.color }}
                              ></div>
                              <div className="font-bold">
                                {item?.price}&nbsp;₫
                              </div>
                            </div>
                          </Radio>
                        ))}
                      </Radio.Group>
                    </div>

                    <div className="">
                      <a className="flex border-2 rounded-xl h-12 w-32 items-center justify-center text-xl">
                        <HeartOutlined
                          style={{
                            marginRight: "10px",
                          }}
                        />
                        {product?.totalWish}
                      </a>
                    </div>
                    <div className="mt-6">
                      <p>{product?.description}</p>

                      <div className="flex">
                        <p className="font-bold">Hiệu:</p>
                        <p className="ml-2">{product?.nameBrand}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex items-center mr-12 font-bold">
                        Chọn số lượng:{" "}
                      </div>
                      {type[selectedType]?.quantity > 0 ? (
                        <div>
                          <button
                            className="border-2 rounded-tl-xl rounded-bl-xl w-12 h-10"
                            onClick={() => {
                              quantity > 1
                                ? setQuantity(quantity - 1)
                                : setQuantity(quantity);
                            }}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            min={1}
                            value={quantity}
                            disabled={true}
                            onChange={quantityHandler}
                            className="border-2 text-center w-32 h-10"
                          ></input>
                          <button
                            className="border-2 rounded-tr-xl rounded-br-xl w-12 h-10"
                            onClick={() => {
                              quantity < type[selectedType]?.quantity
                                ? setQuantity(quantity + 1)
                                : setQuantity(quantity);
                            }}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center text-xl text-red-500 font-bold">
                          Hết hàng
                        </div>
                      )}
                    </div>

                    <div className="flex mt-6">
                      <div
                        className="w-64 mr-8 flex p-2 border-2 rounded-xl justify-center items-center drop-shadow-lg"
                        style={{ backgroundColor: "#FFEBB7", color: "#E7A800" }}
                      >
                        <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                        <button className="ml-2 text-xl font-bold">
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                      <div
                        className="p-4 border-2 rounded-xl"
                        style={{ backgroundColor: "#F5B301" }}
                      >
                        <button className="text-xl text-white font-bold drop-shadow-lg">
                          Mua ngay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-yellow-light border-dashed"></hr>
              <div className="m-6">
                <div className="flex p-5 justify-center items-center">
                  <div className="mr-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                  </div>
                  <div>
                    <h1 className="uppercase mb-0 text-center text-3xl font-bold">
                      Sản phẩm tương tự
                    </h1>
                  </div>
                  <div className="ml-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                  </div>
                </div>
                <div className="my-4">
                  {category?._id ? (
                    <CarouselProducts
                      idCategory={category?._id}
                      nameCategory={category?.name}
                    ></CarouselProducts>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
