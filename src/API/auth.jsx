import callAPI from "./callAPI";

export const postLogin = (data) => 
    callAPI({url: '/auth/login', method: 'POST', data});