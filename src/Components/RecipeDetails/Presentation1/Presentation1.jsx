import React, { useMemo } from "react";
import classes from "./Presentation1.module.css";
import ingredientsImg from "./ingredients_icon.svg";
import preparationImg from "./preparation_icon.svg";
import cookingImg from "./cooking_icon.svg";

function Presentation1({ recipe }) {
  const fieldsArray = [
    { name: "ingredients", svg: ingredientsImg, arr: "ingredientsArr" },
    { name: "preparation", svg: preparationImg, arr: "preparationArr" },
    { name: "cooking", svg: cookingImg, arr: "cookingArr" },
  ];

  const ingredientsArr = useMemo(
    () => recipe.ingredients?.split(",") || [],
    [recipe.ingredients]
  );

  const preparationArr = useMemo(
    () => recipe.preparation?.split(",") || [],
    [recipe.preparation]
  );

  const cookingArr = useMemo(
    () => recipe.cooking?.split(",") || [],
    [recipe.cooking]
  );

  return (
    <>
      {fieldsArray.map((field, index) => {
        return (
          recipe[field.name] && (
            <div key={index} className={classes.cooking}>
              <img
                src={field.svg}
                alt={field.name}
                className={classes.logo_cooking}
              />
              {/* {recipe[field.name]} */}
              <ul className={classes.ulContainer}>
                {[field.arr].map((arr, index) => {
                  return <li key={index}>{arr} </li>;
                })}
              </ul>
            </div>
          )
        );
      })}
    </>
  );
}

export default Presentation1;
