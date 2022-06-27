import axios from "axios";
import { auth } from "../utils/auth";

const BASE_API = process.env.REACT_APP_BASE_HOST;

export default async function callAPI({ url, method, data, option }) {
  const user = auth();
  const token = user.token ? user.token : ""; 
  return new Promise((resolve, reject) => {
    axios({
      method,
      url: `${BASE_API}${url}`,
      data,
      headers: { ...option?.headers, Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}