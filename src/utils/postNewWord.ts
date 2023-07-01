import { api } from "./api";

export const postNewWord = async (id: string, body: any) => {
  const res = await api.post(`/userword/new/${id}`, body);
  const newWord = res.data;

  return newWord;
};
