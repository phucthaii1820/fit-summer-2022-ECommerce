import callAPI from "./callAPI";

export const getProfileUser = () =>
    callAPI({ url: "/user/info", method: "GET" });

export const getWishList = () =>
    callAPI({ url: "/user/wish-list", method: "GET" });

export const postPassword = (data) =>
    callAPI({ url: `/user/change-password`, method: "POST", data });

export const forgotPassword = (data) =>
    callAPI({ url: `/user/forgot-password`, method: "POST", data });

export const postInfo = (data) =>
    callAPI({ url: `/user/update-info`, method: "POST", data });

export const checkExistUser = (data) =>
    callAPI({ url: `/user/check-exist-user`, method: "POST", data });

export const getAllUsers = (data) =>
    callAPI({ url: `/user/get-all-users`, method: "GET", data });

export const addWishProduct = (data) =>
    callAPI({ url: `/user/add-wish-product`, method: "POST", data });

export const removeWishProduct = (data) =>
    callAPI({ url: `/user/remove-wish-product`, method: "POST", data });

export const addShoppingCart = (data) =>
    callAPI({ url: `/user/add-cart`, method: "POST", data });

export const removeShoppingCart = (data) =>
    callAPI({ url: `/user/remove-cart`, method: "POST", data });

export const deleteUser = (id) =>
    callAPI({ url: `/user/delete-user?id=${id}`, method: "GET" });
