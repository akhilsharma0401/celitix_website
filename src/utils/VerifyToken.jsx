import axios from "axios";

export const verifyToken = async (token) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const data = {
    token,
  };

  const res = await axios.post(`${url}/verify-token`, data,{
      headers:{
        "x-secret-key":process.env.NEXT_PUBLIC_API_KEY
      }
    });
  return res;
};