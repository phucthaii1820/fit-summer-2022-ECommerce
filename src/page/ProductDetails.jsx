import { Breadcrumb, Radio } from 'antd'
import {
    HeartOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from 'react'

import ProductCard from "@/components/product-card/ProductCard";
import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";
import { getListProducts, getProductInfo } from '@/API/product';
import Header from '@/components/Layouts/Header/Header';

const ProductDetails = ({ idCategory, Page, idProduct }) => {
    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    };
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

    const [product, setProduct] = useState({});
    const [type, setType] = useState([]);
    const [selectedType, setSelectedType] = useState("");

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
    const onChangeRadio = (e) => {
        setSelectedType(e.target.value);
    };

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

    console.log(product)
    console.log(type)
    console.log(selectedType)

    var settingThumbs = {
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

    var settingProducts = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    const items = [
        {
            id: 1,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",
            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 2,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 3,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 4,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 5,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 6,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
        {
            id: 7,
            name: "Phuộc xe đạp chính hãng",
            original_price: "1.500.000",
            discount_percent: "10%",
            discount_price: "1.300.000",

            image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwYmlrZXxlbnwwfHwwfHw%3D",
            heart_count: 999,
        },
    ];

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
                                    <img src={Logo} alt="ThumbNails"></img>
                                </div>
                                <div>
                                    <Slider {...settingThumbs}>
                                        {gallery.map((item) => (
                                            <div className="mr-1">
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
                                    <p className="mt-2 text-xl font-light">(2 bình luận)</p>
                                </div>
                                <div className="flex">
                                    <p className="text-xl font-bold">{type[0]?.price}&nbsp;₫</p>
                                </div>

                                <hr className="mt-2 mb-5 border-yellow-light border-dashed"></hr>

                                <div className="mb-4">
                                    <Radio.Group className="mt-1" onChange={onChangeRadio} optionType="button" value={selectedType}>
                                        {type.map((item, index) => (
                                            <Radio key={index} value={index}
                                                style={{
                                                    marginRight: "20px",
                                                    borderRadius: "10px"
                                                }}>
                                                {item?.color}
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
                                    <button className="border-2 rounded-tr-xl rounded-br-xl w-12 h-10" onClick={() => { setQuantity(quantity + 1) }}>+</button>
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

                    <div className="m-6">
                        <h1 className="text-2xl">Sản Phẩm Tương Tự</h1>
                        <div className="my-6">
                            <Slider {...settingProducts}>
                                {items.map((item) => (
                                    <ProductCard key={item.id} item={item} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails