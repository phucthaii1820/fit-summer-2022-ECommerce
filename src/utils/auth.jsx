// import Cookies from "js-cookie";
import Cookies from "universal-cookie";

const timestamp = new Date().getTime();
const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
const expireDate = new Date(expire);

export const auth = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user;
};

export const login = (user) => {
  console.log(user);
  const cookies = new Cookies();
  cookies.set("user", user, { expires: expireDate, path: "/" });
  console.log(cookies.get("user"));
};

export const register = (user) => {
  const cookies = new Cookies();
  cookies.set("user", user, { expires: expireDate });
};

export const logout = () => {
  const cookies = new Cookies();
  cookies.remove("user");
  console.log(cookies.get("user"));
  window.location.reload();
};
