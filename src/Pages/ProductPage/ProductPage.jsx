import React, { useState, useEffect } from "react";
import classes from "./ProductPage.module.css";
import * as recipesApi from "../../Apis/recipes.api";
import RecipeList from "../../Components/RecipeList/RecipeList";
import Spinner from "../../Components/Spinner/Spinner";

function ProductPage({ subCategory, title }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAllRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await recipesApi.getAllRecipes({ subCategory });
      const sortedRes = response.sort((a, b) => (a.title < b.title ? -1 : 1));
      setRecipes(sortedRes);
    } catch (error) {
      if (error.response.status === 404) {
        setRecipes([]);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadAllRecipes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={classes.container}>
        <h1>{title}</h1>
        {!isLoading && recipes.length > 0 && <RecipeList recipes={recipes} />}
        {!isLoading && recipes.length === 0 && <p>Il n'y a pas de recettes!</p>}
        {isLoading && <Spinner />}
      </div>
    </>
  );
}

export default ProductPage;
