import React, { useMemo } from "react";
import classes from "./Preparation.module.css";
import preparationImg from "./preparation_icon.svg";

function Preparation({ preparation }) {
  const preparationArr = useMemo(
    () => preparation?.split(",") || [],
    [preparation]
  );

  return (
    <div className={classes.preparation}>
      <img
        src={preparationImg}
        alt="preparation"
        className={classes.logo_cooking}
      />
      <ul>
        {preparationArr.map((preparation, index) => {
          return <li key={index}>{preparation} </li>;
        })}
      </ul>
    </div>
  );
}

export default Preparation;
