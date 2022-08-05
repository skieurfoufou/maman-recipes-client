import axios from "axios";
import env from "../config/env";

export const getAllRecipes = async ({ subCategory, name }) => {
  try {
    const parameters = [];
    if (subCategory) {
      parameters.push(`subCategory=${subCategory}`);
    }

    const url = `${env.SERVER_URL}/recipes${
      parameters.length > 0 ? "?" + parameters.join("&") : ""
    }`;
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getOneRecipe = async (id) => {
  try {
    const url = `${env.SERVER_URL}/recipes/${id}`;
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

export const updateRecipe = async () => {
  try {
    const url = `${env.SERVER_URL}/recipes`;
    console.log(url);
    const res = await axios.put(url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

export const createRecipe = async (newRecipe, token) => {
  try {
    const url = `${env.SERVER_URL}/recipes`;
    const res = await axios.post(url, newRecipe, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};
