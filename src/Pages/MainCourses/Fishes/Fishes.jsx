import React from "react";
import classes from "./Fishes.module.css";
import Header from "../../../Components/Header/Header";

function Fishes() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Poissons</div>
    </>
  );
}

export default Fishes;
