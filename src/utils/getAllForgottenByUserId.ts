import { api } from "./api";

export const getAllForgottenByUserId = async (id: string) => {
  const res = await api.get(`/userword/forgotten/${id}`);
  const words = res.data;

  return words;
};

