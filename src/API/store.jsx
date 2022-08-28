import callAPI from "./callAPI";

export const getStore = () => callAPI({ url: `/store/get-all`, method: "GET" });
export const updateStore = (data) =>
  callAPI({ url: `/store/update`, method: "POST", data });
