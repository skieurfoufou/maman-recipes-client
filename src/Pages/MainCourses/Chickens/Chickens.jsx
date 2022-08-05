import React from "react";
import classes from "./Chickens.module.css";
import Header from "../../../Components/Header/Header";

function Chickens() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Poulets</div>
    </>
  );
}

export default Chickens;
