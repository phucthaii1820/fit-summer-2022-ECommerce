import { getProfileUser } from "@/API/user";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set, get) => ({
  user: null,
  token: null,
  setDataUser: (data) => {
    set((state) => ({
      ...state,
      user: data.token ? data.user_data : null,
      token: data.token ? data.token : null,
    }));
  },
  logout: async () => {
    set((state) => ({
      ...state,
      user: null,
      token: null,
    }));
  },
  loadProfile: async () => {
    const res = await getProfileUser();
    set((state) => ({
      ...state,
      user: res.user_data,
    }));
  },
  setLoveList: async (data) => {
    set((state) => ({
      ...state,
      user: { ...state.user, wish: data },
    }));
  },
  setCart: async (data) => {
    set((state) => ({
      ...state,
      user: { ...state.user, cart: data },
    }));
  },
  SetPassword: async (data) => {
    set((state) => ({
      ...state,
      user: { ...state.user, password: data },
    }));
  },
});

store = devtools(store); // Allow redux devtool debug
store = persist(store, { name: "user" }); // Persist to local storage

export default create(store);
