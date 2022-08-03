import callAPI from "./callAPI";

export const getProfileUser = () =>
    callAPI({ url: "/user/info", method: "GET" });

export const postPassword = (data) =>
    callAPI({ url: `/user/change-password`, method: "POST", data });

export const postInfo = (data) =>
    callAPI({ url: `/user/update-info`, method: "POST", data });

export const checkExistUser = (data) =>
    callAPI({ url: `/user/check-exist-user`, method: "POST", data });

export const getAllUsers = (data) =>
    callAPI({ url: `/user/get-all-users`, method: "GET", data });
