import callAPI from "./callAPI";

export const getProfileUser = () =>
    callAPI({ url: '/user/info', method: 'GET' });

export const postPassword = (data) =>
    callAPI({ url: `/user/change-password`, method: 'POST', data });

export const postInfo = (data) =>
    callAPI({ url: `/user/update-info`, method: 'POST', data });