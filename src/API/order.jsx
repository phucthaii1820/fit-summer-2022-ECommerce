import callAPI from "./callAPI";

export const creatOrder = (data) =>
  callAPI({ url: `/order/create`, method: "POST", data });

export const pay = (data) =>
  callAPI({ url: `/order/pay`, method: "POST", data });

export const changeStatusOrder = (data) =>
  callAPI({ url: `/order/change-status`, method: "POST", data });
