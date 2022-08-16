import React from "react";
import classes from "./SearchResults.module.css";
import { Link } from "react-router-dom";
import close from "./close.svg";
import Spinner from "../../../Spinner/Spinner";

function SearchResults({ recipes, onClose, isLoading }) {
  return (
    <div className={classes.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={classes.header}>
            nous avons trouve {recipes.length} recette/s>
            <img
              src={close}
              className={classes.buttonIcon}
              alt="icon"
              onClick={onClose}
            />
          </div>
          <div className={classes.results}>
            {recipes.map((r) => {
              return (
                <Link
                  to={`/Recipe?id=${r._id}`}
                  className={classes.link}
                  key={r._id}
                  onClick={onClose}
                >
                  {r.title}
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;
