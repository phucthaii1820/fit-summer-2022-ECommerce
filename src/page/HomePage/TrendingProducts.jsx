import React from "react";

import CarouselProducts from "@/components/product-card/Carousel";

export default function TrendingProducts() {
    return (
        <div>
            <div className="flex m-4 p-5 justify-center items-center">
                <div className="mr-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                </div>
                <div>
                    <h1 className="uppercase mb-0 text-center text-3xl font-bold">Sản phẩm nổi bật</h1>
                </div>
                <div className="ml-2">
                    <hr className="bg-yellow-light h-1 w-14"></hr>
                </div>
            </div>

            <CarouselProducts idCategory="62ab68801094bceaaaa5c981" nameCategory="Phuộc"></CarouselProducts>
            <CarouselProducts idCategory="62d7565c63324e2fc798bc82" nameCategory="Tay thắng"></CarouselProducts>
            <CarouselProducts idCategory="62d7573cda84fd20763e1022" nameCategory="Niềng"></CarouselProducts>
        </div>
    );
}
