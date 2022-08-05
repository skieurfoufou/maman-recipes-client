import React from "react";
import classes from "./Holidays.module.css";
import Header from "../../../Components/Header/Header";

function Holidays() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Plats de Fetes</div>
    </>
  );
}

export default Holidays;
