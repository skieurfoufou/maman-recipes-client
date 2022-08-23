import React, { useMemo } from "react";
import classes from "./Cooking.module.css";
import cookingImg from "./cooking_icon.svg";

function Cooking({ cooking }) {
  const cookingArr = useMemo(() => cooking?.split(",") || [], [cooking]);

  return (
    <div className={classes.preparation}>
      <img
        src={cookingImg}
        alt="preparation"
        className={classes.logo_cooking}
      />
      <ul className={classes.ulContainer}>
        {cookingArr.map((cooking, index) => {
          return <li key={index}>{cooking} </li>;
        })}
      </ul>
    </div>
  );
}

export default Cooking;
