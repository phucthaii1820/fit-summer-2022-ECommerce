import callAPI from "./callAPI";

export const getAllCategories = () =>
    callAPI({ url: `/category/all-category`, method: "GET" });

export const getCategoryInfo = (id) =>
    callAPI({ url: `/category/get-category-by-id?id=${id}`, method: "GET" });

export const deleteCategory = (id) =>
    callAPI({
        url: `/category/remove-category`,
        method: "POST",
        data: { id: id },
    });

export const addCategory = (name) =>
    callAPI({
        url: `/category/add-category`,
        method: "POST",
        data: { name: name },
    });

export const updateCategory = (id, name) =>
    callAPI({
        url: `/category/update-category`,
        method: "POST",
        data: { id: id, name: name },
    });
