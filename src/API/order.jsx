import callAPI from "./callAPI";

export const createOrder = (data) =>
    callAPI({ url: `/order/create`, method: "POST", data });

export const pay = (data) =>
    callAPI({ url: `/order/pay`, method: "POST", data });

export const changeStatusOrder = (data) =>
    callAPI({ url: `/order/change-status`, method: "POST", data });

export const getOrders = () =>
    callAPI({ url: `/order/get-all`, method: "GET" });

export const getOrderID = (id) =>
    callAPI({ url: `/order/get-by-id?id=${id}`, method: "GET" });
