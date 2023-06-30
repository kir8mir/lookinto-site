import { api } from "./api";

export const getAllUsers = async () => {
  const res = await api.get(`/user/`);
  const users = res.data;

  return users;
};

