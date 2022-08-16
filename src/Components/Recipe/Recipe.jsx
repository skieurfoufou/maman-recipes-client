import React, { useEffect } from "react";
import classes from "./Recipe.module.css";
import { Link, useSearchParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import Spinner from "../Spinner/Spinner";
import { useRecipeById } from "../../Hooks/useRecipeById";

function RecipePage() {
  const { loadRecipeById, isError, recipe, isLoading } = useRecipeById();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      throw new Error("no id for recipe");
    }
    loadRecipeById(id);
  }, [searchParams, loadRecipeById]);

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
