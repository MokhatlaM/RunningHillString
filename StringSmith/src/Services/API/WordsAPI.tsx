import axios from "axios";

export const StringSmithApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getWords = async () => {
  const res = await StringSmithApi.get("/api/words");
  return res.data;
};
