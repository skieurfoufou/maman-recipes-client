import React, { useEffect, useState } from "react";
import classes from "./Slider.module.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import { Link } from "react-router-dom";

function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });
  const [autoNextCount, setAutoNextCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoNextCount >= dataSlider.length) {
        clearInterval(intervalId);
        return;
      }

      nextSlide();
      setAutoNextCount(autoNextCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const nextSlide = () => {
    console.log("NEXT");
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === dataSlider.length) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };

  const prevSlide = () => {
    console.log("PREV");
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 500);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: 6, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 6, inProgress: false });
      }, 500);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className={classes["container-slider"]}>
      {dataSlider.map((obj, index) => {
        return (
          <Link to={`/MainCourses${obj.link}`}>
            <div
              key={obj.id}
              className={
                slideAnim.index === index + 1
                  ? `${classes.slide} ${classes["active-anim"]}`
                  : classes.slide
              }
            >
              <img
                src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                alt=""
              />
              <h1>{obj.title}</h1>
            </div>
          </Link>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className={classes["container-dots"]}>
        {Array.from({ length: 6 }).map((item, index) => {
          return (
            <div
              className={
                slideAnim.index === index + 1
                  ? classes["dot active"]
                  : classes.dot
              }
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
