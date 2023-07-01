import { api } from "./api";

export const getAllNewByUserId = async (id: string) => {

  const res = await api.get(`/userword/new/${id}`);
  const words = res.data;
  return words;
};

