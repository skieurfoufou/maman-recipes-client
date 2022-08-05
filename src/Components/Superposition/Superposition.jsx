import React from "react";
import classes from "./Superposition.module.css";
import { Link } from "react-router-dom";

function Superposition({ content }) {
  function chooseClass(index) {
    if (index === 0 || index === 3) {
      return classes.kind1;
    } else if (index === 1 || index === 4) {
      return classes.kind2;
    } else if (index === 2 || index === 5) {
      return classes.kind3;
    }
  }

  return (
    <div className={classes.container}>
      {content.map((category, index) => {
        return (
          <Link
            to={category.link}
            className={classes.header_link}
            key={category.id}
          >
            <div className={chooseClass(index)}>
              <img
                src={category.image.link}
                alt={category.name}
                className={classes.image}
              ></img>
              <h1 className={classes.title}>{category.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Superposition;
