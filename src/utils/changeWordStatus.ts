import { api } from "./api";

export const changeWordStatus = async (action: any) => {
  const res = await api.post('/userword/change/status', action);
  const message = res.data;
  
  return message;
};