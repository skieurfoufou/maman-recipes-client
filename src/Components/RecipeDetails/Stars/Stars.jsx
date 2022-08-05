import React from "react";
import classes from "./Stars.module.css";
import star from "./star_icon.svg";
import halfStar from "./halfStar_icon.svg";

function getStarArray(grades) {
  if (!grades) {
    return [];
  }

  const flooredGrades = Math.floor(grades);
  let keyIdx = 0;
  const starArr = Array(flooredGrades)
    .fill(null)
    .map((_) => (
      <img src={star} key={keyIdx++} alt="star" className={classes.logo_star} />
    ));

  const isWithHalf = grades - flooredGrades !== 0;
  if (isWithHalf) {
    starArr.push(
      <img
        src={halfStar}
        key={keyIdx++}
        alt="halfStar"
        className={classes.logo_star}
      />
    );
  }
  return starArr;
}

function Stars({ grades }) {
  return (
    <div className={classes.timeDetail}>
      NOTE:
      {getStarArray(grades)}
      {grades}
    </div>
  );
}

export default Stars;
