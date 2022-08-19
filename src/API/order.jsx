import callAPI from "./callAPI";

export const creatOrder = (data) =>
  callAPI({ url: `/order/create`, method: "POST", data });
