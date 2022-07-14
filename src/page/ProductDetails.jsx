import { Breadcrumb, Radio } from 'antd'
import {
    HeartOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react'

import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";
import { getListProducts, getProductInfo } from '@/API/product';
import CarouselProducts from '@/components/product-card/Carousel';

const ProductDetails = ({ idCategory, Page, idProduct }) => {
    const gallery = [
        {
            image: Logo
        },
        {
            image: Logo
        },
        {
            image: Logo
        },
        {
            image: Login
        },
    ];

    // const items = [
    //     {
    //         id: 1,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 2,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 3,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 4,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 5,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 6,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    //     {
    //         id: 7,
    //         name: "Phuộc xe đạp chính hãng",
    //         original_price: "1.500.000",
    //         discount_percent: "10%",
    //         discount_price: "1.300.000",
    //         image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
    //         heart_count: 999,
    //     },
    // ];
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState("0");
    const [selectedThumb, setSelectedThumb] = useState(0);

    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    };

    const onChangeRadio = (e) => {
        setSelectedType(e.target.value);
    };

    const onClickThumb = (e) => {
        setSelectedThumb(e.target.value);
    };
    // useEffect(() => {
    //     async function fetchProducts() {
    //         try {
    //             // const res = await getListProducts(idCategory, Page);
    //             const res = await getListProducts("62ab68801094bceaaaa5c981", "1");
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchProducts();
    // }, []);

    useEffect(() => {
        async function fetchProduct() {
            try {
                // const res = await getProductInfo(idProduct);
                const res = await getProductInfo("62bd79c9dcccb6ee9faf9cd9");
                setProduct(res);
                setType(res?.data?.type)
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
    console.log(selectedThumb)
    return (
        <div className="py-6">
            <div className="container m-auto">
                <div className="px-16">
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Mua sắm</Breadcrumb.Item>
                        <Breadcrumb.Item>Đồ kiểng xe máy</Breadcrumb.Item>
                        <Breadcrumb.Item>{product?.data?.title}</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="py-8">
                        <div className="grid grid-cols-3 gap-20">
                            <div className="col-span">
                                <div className="mb-8">
                                    <img src={gallery[selectedThumb].image} alt="ThumbNails"></img>
                                </div>
                                <div>
                                    <Slider {...settingThumbs} style={{ "cursor": "pointer" }} onClick={onClickThumb} value={selectedThumb}>
                                        {gallery.map((item, index) => (
                                            <div className="mr-1" key={index}>
                                                <div className="w-32 h-24 border-2 rounded-lg p-2 items-center">
                                                    <img src={item.image} alt="ProductThumb" className="h-16 w-32"></img>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-span-2 text-base">
                                <div className="text-3xl font-bold">
                                    <span className="text-3xl font-bold">{product?.data?.title}</span>
                                </div>
                                <div className="flex mt-3">
                                    <p className="text-xl text-red-500 font-bold">{type[selectedType]?.price}&nbsp;₫</p>
                                </div>

                                <hr className="mb-5 border-yellow-light border-dashed"></hr>

                                <div className="flex mb-4">
                                    <p className="mt-3 mr-8">Chọn màu cho sản phẩm: </p>
                                    <Radio.Group className="mt-1" onChange={onChangeRadio} optionType="button" value={selectedType}>
                                        {type.map((item, index) => (
                                            <Radio key={index} value={index}
                                                style={{
                                                    marginRight: "20px",
                                                    height: "50px",
                                                    backgroundColor: "#F1F1F1",
                                                }}
                                            >
                                                <div className="flex mt-2 justify-center items-center">
                                                    <div className="mr-2 h-4 w-4" style={{ backgroundColor: item?.color }}>

                                                    </div>
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
                                        <HeartOutlined style={{
                                            marginRight: "10px"
                                        }} />
                                        {product?.data?.totalWish}
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <p>{product?.data?.description}</p>
                                    <p>Hiệu: {product?.data?.nameBrand}</p>
                                </div>
                                <div className="flex">
                                    <p className="mt-2 mr-12">Chọn số lượng: </p>
                                    <button className="border-2 rounded-tl-xl rounded-bl-xl w-12 h-10" onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }}>-</button>
                                    <input type="text" min={1} value={quantity} disabled={true} onChange={quantityHandler} className="border-2 text-center w-32 h-10"></input>
                                    <button className="border-2 rounded-tr-xl rounded-br-xl w-12 h-10" onClick={() => { quantity < type[selectedType]?.quantity ? setQuantity(quantity + 1) : setQuantity(quantity) }}>+</button>
                                </div>

                                <div className="flex mt-6">
                                    <div className="w-64 mr-8 flex p-2 border-2 rounded-xl justify-center items-center drop-shadow-lg" style={{ backgroundColor: "#FFEBB7", color: "#E7A800" }}>
                                        <ShoppingCartOutlined style={{ fontSize: "25px" }} />
                                        <button className="ml-2 text-xl font-bold">
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                    <div className="p-4 border-2 rounded-xl" style={{ backgroundColor: "#F5B301" }} >
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
                                <h1 className="uppercase mb-0 text-center text-3xl font-bold">Sản phẩm tương tự</h1>
                            </div>
                            <div className="ml-2">
                                <hr className="bg-yellow-light h-1 w-14"></hr>
                            </div>
                        </div>
                        <div className="my-4">
                            <CarouselProducts idCategory="62ab68801094bceaaaa5c981" nameCategory="Phuộc"></CarouselProducts>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails