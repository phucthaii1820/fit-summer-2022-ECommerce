import callAPI from "./callAPI";

export const getListProducts = (category, page) =>
    callAPI({
        url: `/products/get-list-by-category?category=${category}&page=${page}`,
        method: "GET",
    });

export const getProductInfo = (id) =>
    callAPI({ url: `/products/get-product?id=${id}`, method: "GET" });

export const searchProducts = (keyword, page) =>
    callAPI({
        url: `/products/search?keyword=${keyword}&page=${page}`,
        method: "GET",
    });

export const getAllProducts = () =>
    callAPI({ url: `/products/get-all-products`, method: "GET" });

export const postComment = (data) =>
    callAPI({ url: `/products/create-comment`, method: "POST", data });

export const replyComment = (data) =>
    callAPI({ url: `/products/reply-comment`, method: "POST", data });
