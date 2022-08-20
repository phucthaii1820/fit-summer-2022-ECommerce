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

export const addProduct = (data) =>
    callAPI({
        url: `/products/add-product`,
        method: "POST",
        data: data,
        option: {
            headers: {
                "Content-Type": "application/json",
            },
        },
    });

export const updateProduct = (data) =>
    callAPI({
        url: `/products/update-product`,
        method: "POST",
        data: data,
        option: {
            headers: {
                "Content-Type": "application/json",
            },
        },
    });

export const deleteProduct = (id) =>
    callAPI({
        url: `/products/remove-product`,
        method: "POST",
        data: { id: id },
    });
