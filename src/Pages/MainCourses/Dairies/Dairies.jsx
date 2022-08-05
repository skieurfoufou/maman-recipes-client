import React from "react";
import classes from "./Dairies.module.css";
import Header from "../../../Components/Header/Header";

function Dairies() {
  return (
    <>
      <Header />
      <div className={classes.container}>Les Plats au Lait</div>
    </>
  );
}

export default Dairies;
