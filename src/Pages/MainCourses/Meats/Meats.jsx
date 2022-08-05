import React from "react";
import classes from "./Meats.module.css";
import Header from "../../../Components/Header/Header";

function Meats() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Viandes</div>
    </>
  );
}

export default Meats;
