import React, { useEffect } from "react";
import classes from "./SearchBar.module.css";
import search from "./search_icon.png";
import { useState } from "react";
import * as recipesApi from "../../../Apis/recipes.api";
import SearchResults from "./SearchResults/SearchResults";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchRecipes = async (query) => {
    try {
      const response = await recipesApi.getAllRecipes({ q: query });
      setRecipes(response);
    } catch (error) {}

    setIsLoading(false);
  };

  useEffect(() => {
    if (searchValue === "") return;
    setIsLoading(true);

    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      searchRecipes(searchValue);
    }, 500);
    setTimeoutId(id);
    setIsOpen(true);
  }, [searchValue]);

  const resetState = () => {
    setIsOpen(false);
    setSearchValue("");
    setRecipes([]);
  };

  return (
    <div className={classes.searchContainer}>
      <img
        src={search}
        className="logo_search"
        alt="logo"
        height="45"
        width="45"
      />
      <input
        placeholder="search"
        className={classes.search}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {isOpen && (
        <SearchResults
          isLoading={isLoading}
          recipes={recipes}
          onClose={resetState}
        />
      )}
    </div>
  );
}

export default SearchBar;
