import callAPI from "./callAPI";

export const getAllCategories = () =>
    callAPI({ url: `/category/all-category`, method: "GET" });

export const getCategoryInfo = (id) =>
    callAPI({ url: `/category/get-category-by-id?id=${id}`, method: "GET" });
