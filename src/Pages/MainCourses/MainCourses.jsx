import React from "react";
import classes from "./MainCourses.module.css";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";

function MainCourses() {
  return (
    <>
      <Header />
      <div className={classes.slider_container}>
        <Slider />
      </div>
      <div className={classes.container}>Les Plats Principaux</div>
    </>
  );
}

export default MainCourses;
