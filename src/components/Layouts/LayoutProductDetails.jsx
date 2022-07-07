import { Breadcrumb } from 'antd'
import {
    HeartOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";

import React, { useState } from 'react'
import LayoutMain from './LayoutMain'
import Gallery from '../gallery/Gallery';
import Logo from "src/image/Logo.svg";



const LayoutProductDetails = () => {
    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <LayoutMain>
            <div className="px-16">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Mua sắm</Breadcrumb.Item>
                    <Breadcrumb.Item>Đồ kiểng xe máy</Breadcrumb.Item>
                    <Breadcrumb.Item>Dây dầu Thái Morin trước 36 inch</Breadcrumb.Item>
                </Breadcrumb>

                <div className="py-8">
                    <div className="grid grid-cols-3 gap-20">
                        <div className="col-span">
                            <div className="mb-8">
                                <img src={Logo}></img>
                            </div>
                            <Gallery></Gallery>
                        </div>

                        <div className="col-span-2 text-base">
                            <div className="text-3xl font-bold">
                                <span className="text-3xl font-bold">Dây dầu Thái Morin trước 36 inch</span>
                                <p className="mt-2 text-xl font-light">(2 bình luận)</p>
                            </div>
                            <div className="flex">
                                <p className="text-xl font-bold">200.000&nbsp;₫</p>
                                {/* <p className="text-xl ml-3 line-through">300.000&nbsp;₫</p> */}
                            </div>
                            <div clasName="">
                                <a className="flex border-2 rounded-xl h-12 w-32 items-center justify-center text-xl">
                                    <HeartOutlined style={{
                                        marginRight: "10px"
                                    }} />
                                    90
                                </a>
                            </div>
                            <div className="mt-6">
                                <p>Dây dầu kiểng giúp xe bạn thật nổi bật và bền chắc hơn so với dây dầu nguyên bản, có khả năng chống cắt dây trộm heo dầu.</p>
                                <p>Hiệu: Morin</p>
                            </div>
                            <div className="flex">
                                <p className="mt-2 mr-12">Chọn số lượng: </p>
                                <button className="border-2 rounded-tl-xl rounded-bl-xl w-12 h-10" onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }}>-</button>
                                <input type="text" min={1} value={quantity} disabled={true} onChange={quantityHandler} className="border-2 text-center w-32 h-10"></input>
                                <button className="border-2 rounded-tr-xl rounded-br-xl w-12 h-10" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                            </div>

                            <div className="flex mt-6">
                                <div className="w-64 mr-8 flex p-2 border-2 rounded-xl justify-center items-center drop-shadow-lg" style={{ backgroundColor: "#FFEBB7", color: "#E7A800" }}>
                                    <ShoppingCartOutlined style={{ fontSize: "25px" }}/>
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

                    <div>

                    </div>
                </div>
            </div>
        </LayoutMain>
    )
}

export default LayoutProductDetails