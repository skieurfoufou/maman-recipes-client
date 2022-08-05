import React from "react";
import classes from "./TimeDisplay.module.css";
import TimeBadge from "../TimeBadge/TimeBadge";
import Stars from "../Stars/Stars";
import NumberOfPersons from "../NumberOfPersons/NumberOfPersons";

function TimeDisplay({
  preparationTime,
  cookingTime,
  grades,
  numberOfPersons,
}) {
  return (
    <div className={classes.time}>
      {preparationTime && <TimeBadge timeText={preparationTime} mode="prep" />}
      {cookingTime && <TimeBadge timeText={cookingTime} mode="cook" />}

      {grades && <Stars grades={grades} />}
      <NumberOfPersons numberOfPersons={numberOfPersons} />
    </div>
  );
}

export default TimeDisplay;
