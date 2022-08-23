import React from "react";
import classes from "./Presentation.module.css";
import comments from "./comments_icon.svg";
import variations from "./variations_icon.svg";
import linkToOtherSite from "./link_icon.svg";

function Presentation({ recipe }) {
  const fieldsArray = [
    { name: "comments", svg: comments },
    { name: "variations", svg: variations },
    { name: "linkToOtherSite", svg: linkToOtherSite },
  ];
  return (
    <>
      {fieldsArray.map((field, index) => {
        return (
          recipe[field.name] && (
            <div key={index} className={classes.cooking}>
              <img
                src={field.svg}
                alt={field.name}
                className={classes.logo_cooking}
              />
              {recipe[field.name]}
            </div>
          )
        );
      })}
    </>
  );
}

export default Presentation;
