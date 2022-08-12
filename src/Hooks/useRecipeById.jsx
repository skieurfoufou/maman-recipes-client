import { useCallback, useState } from "react";
import * as recipesApi from "../Apis/recipes.api";

export function useRecipeById() {
  const [error, setError] = useState("");
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadRecipeById = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const response = await recipesApi.getOneRecipe(id);
      setRecipe(response);
      setIsLoading(false);
    } catch (error) {
      //TODO: not working
      const errorMessage = error.message || "an error has occurred";
      setError(errorMessage);
      setIsLoading(false);
    }
  }, []);

  return {
    recipe,
    setRecipe,
    isLoading,
    error,
    isError: !!error,
    loadRecipeById,
  };
}
