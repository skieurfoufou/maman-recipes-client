import React from "react";
import classes from "./RecipeList.module.css";
import { Link } from "react-router-dom";

function RecipeList({ recipes }) {
  function callRecipe(recipe) {}

  return (
    <div className={classes.recipeList}>
      {recipes.sort().map((recipe) => (
        <Link to={`/Recipe?id=${recipe._id}`} key={recipe._id}>
          <div className={classes.title} onClick={callRecipe(recipe)}>
            {recipe.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;
