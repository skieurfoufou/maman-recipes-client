import React, { useEffect } from "react";
import classes from "./SearchBar.module.css";
import search from "./search_icon.png";
import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log(value);
  }, [value]);

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
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
