import Cookies from "js-cookie";

export const auth = () => {
  const user = Cookies.get("user");
  const parsed = user ? JSON.parse(user) : "";
  return parsed;
};

export const login = (user) => {
  Cookies.set("user", user, { expires: 7 });
};