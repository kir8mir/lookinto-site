import { api } from "./api";

export const getAllFamiliarByUserId = async (id: string) => {
  const res = await api.get(`/userword/familiar/${id}`);
  const words = res.data;

  return words;
};

