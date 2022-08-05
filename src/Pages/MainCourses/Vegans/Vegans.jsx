import React from "react";
import classes from "./Vegans.module.css";
import Header from "../../../Components/Header/Header";

function Vegans() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Vegans</div>
    </>
  );
}

export default Vegans;
