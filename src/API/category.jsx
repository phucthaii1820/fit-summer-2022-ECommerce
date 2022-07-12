import callAPI from "./callAPI";

export const getAllCategories = () =>
    callAPI({ url: `/category/all-category`, method: 'GET' });