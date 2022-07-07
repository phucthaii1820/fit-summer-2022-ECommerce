import callAPI from "./callAPI";

export const postLogin = (data) =>
    callAPI({ url: '/auth/login', method: 'POST', data });

export const postRegister = (data) =>
    callAPI({ url: '/auth/register', method: 'POST', data });