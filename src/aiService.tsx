import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const aiService = {
  chat: async (message: string) => {
    return axios.post(`${API_URL}/api/chat`, {
      message,
    });
  },
};