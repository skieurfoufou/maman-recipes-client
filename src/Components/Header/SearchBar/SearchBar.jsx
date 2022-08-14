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

  const searchRecipes = async (query) => {
    console.log(query);
    const response = await recipesApi.getAllRecipes({ q: query });
    setRecipes(response);
  };

  useEffect(() => {
    if (searchValue === "") return;

    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      searchRecipes(searchValue);
    }, 500);
    setTimeoutId(id);
    setIsOpen(true);
  }, [searchValue]);

  const closePopup = () => {
    setIsOpen(false);
    setSearchValue("");
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
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      {isOpen && <SearchResults recipes={recipes} onClose={closePopup} />}
    </div>
  );
}

export default SearchBar;
