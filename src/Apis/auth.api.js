import axios from "axios";
import env from "../config/env";

export const login = async (loginDetails) => {
  try {
    const url = `${env.SERVER_URL}/login`;
    const res = await axios.post(url, loginDetails);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
