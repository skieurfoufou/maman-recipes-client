import React, { useMemo } from "react";
import classes from "./Ingredients.module.css";
import ingredientsImg from "./ingredients_icon.svg";

function Ingredients({ ingredients }) {
  const ingredientsArr = useMemo(
    () => ingredients?.split(",") || [],
    [ingredients]
  );

  return (
    <div className={classes.ingredients}>
      <img
        src={ingredientsImg}
        alt="ingredients"
        className={classes.logo_cooking}
      />
      <ul className={classes.ulContainer}>
        {ingredientsArr.map((ingredient, index) => {
          return <li key={index}>{ingredient} </li>;
        })}
      </ul>
    </div>
  );
}

export default Ingredients;
