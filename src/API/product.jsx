import callAPI from "./callAPI";

export const getListProducts = (category, page) =>
    callAPI({ url: `/products/get-list-by-category?category=${category}&page=${page}`, method: 'GET' });

export const getProductInfo = ( id ) =>
    callAPI({ url: `/products/get-product?id=${id}`, method: 'GET' });