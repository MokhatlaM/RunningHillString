import axios from "axios";
import { StringSmithApi } from "./WordsAPI";

export const getWordTypes = async () => {
  const res = await StringSmithApi.get("/api/WordTypes");
  return res.data;
};
