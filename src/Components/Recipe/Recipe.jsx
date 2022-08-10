import React, { useEffect, useState } from "react";
import classes from "./Recipe.module.css";
import { Link, useSearchParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import * as recipesApi from "../../Apis/recipes.api";
import Spinner from "../Spinner/Spinner";

function RecipePage() {
  const [searchParams] = useSearchParams();
  const [isError, setIsError] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadRecipeData = async (id) => {
    setIsLoading(true);
    try {
      const response = await recipesApi.getOneRecipe(id);
      setRecipe(response);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      throw new Error("no id for recipe");
    }
    //TODO: get by id the recipe and set to recipe State
    loadRecipeData(id);
  }, [searchParams]);

  //TODO: create an error component
  return isError ? (
    <div>
      <p> Sorry, this page have an error</p>
      <Link to={"/"}>Go to Home</Link>
    </div>
  ) : (
    <div className={classes.container}>
      {isLoading ? <Spinner /> : <RecipeDetails recipe={recipe} />}
    </div>
  );
}

export default RecipePage;
