import React from "react";
import classes from "./TimeBadge.module.css";
import cooking from "./cooking_icon.svg";
import preparation from "./preparation_icon.svg";
import watch from "./watch_icon.svg";

function TimeBadge({ timeText, mode }) {
  return (
    <div className={classes.timeDetail}>
      <img src={watch} alt="watch" className={classes.logo_cooking} />
      {mode === "prep" && (
        <img
          src={preparation}
          alt="preparation"
          className={classes.logo_cooking}
        ></img>
      )}
      {mode === "cook" && (
        <img src={cooking} alt="cooking" className={classes.logo_cooking} />
      )}
      {timeText}
    </div>
  );
}

export default TimeBadge;
