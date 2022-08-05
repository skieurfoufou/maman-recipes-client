import React from "react";
import classes from "./NumberOfPersons.module.css";
import person from "./person_icon.svg";

function NumberOfPersons({ numberOfPersons }) {
  return (
    <div className={classes.timeDetail}>
      <img src={person} alt="person" className={classes.logo_person} />
      {numberOfPersons}
    </div>
  );
}

export default NumberOfPersons;
