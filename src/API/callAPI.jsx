import axios from "axios";
import userStore from "@/stores/user";

const BASE_API = process.env.REACT_APP_BASE_HOST;

const callAPI = async ({ url, method, data, option }) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: {
        ...option?.headers,
        Authorization: `Bearer ${userStore.getState().token}`,
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default callAPI;
