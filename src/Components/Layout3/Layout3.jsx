import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout3.module.css";

function Layout3({ content }) {
  return (
    <div className={classes.container}>
      {content.map((category) => {
        return (
          <Link
            to={category.link}
            className={classes.header_link}
            key={category.id}
          >
            <div className={classes.kind}>
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

export default Layout3;
