import React, { useEffect, useState } from "react";
import classes from "./Recipe.module.css";
import { useSearchParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import * as recipesApi from "../../Apis/recipes.api";

function RecipePage() {
  const [searchParams] = useSearchParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadRecipeData = async (id) => {
    setIsLoading(true);
    const response = await recipesApi.getOneRecipe(id);
    setRecipe(response);
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

  return (
    <div className={classes.container}>
      <RecipeDetails recipe={recipe} />
    </div>
  );
}

export default RecipePage;
