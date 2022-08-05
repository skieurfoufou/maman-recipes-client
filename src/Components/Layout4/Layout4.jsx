import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout4.module.css";

function Layout4({ content }) {
  return (
    <div className={classes.container}>
      {content.map((category, index) => {
        return (
          <Link
            to={category.link}
            className={classes.header_link}
            key={category.id}
          >
            <div className={index % 2 === 0 ? classes.kind1 : classes.kind2}>
              {" "}
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

export default Layout4;
