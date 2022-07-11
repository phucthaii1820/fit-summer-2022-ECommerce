// import Cookies from "js-cookie";
import Cookies from "universal-cookie";

export const auth = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user;
};

export const login = (user) => {
  const cookies = new Cookies();
  cookies.set("user", user);
};

export const register = (user) => {
  const cookies = new Cookies();
  cookies.set("user", user);
};
