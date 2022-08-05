import React from "react";
import classes from "./Presentation.module.css";
import cooking from "./cooking_icon.svg";
import comments from "./comments_icon.svg";
import variations from "./variations_icon.svg";
import linkToOtherSite from "./link_icon.svg";

function Presentation({ recipe }) {
  const fieldsArray = [
    { name: "cooking", svg: cooking },
    { name: "comments", svg: comments },
    { name: "variations", svg: variations },
    { name: "linkToOtherSite", svg: linkToOtherSite },
  ];
  return (
    <>
      {fieldsArray.map((field, index) => {
        return (
          recipe[field.name] && (
            <div className={classes.cooking}>
              <img
                src={field.svg}
                alt={field.name}
                className={classes.logo_cooking}
                key={index}
              />
              {recipe[field.name]}
            </div>
          )
        );
      })}
      {/* <div className={classes.cooking}>
        <img src={cooking} alt="cooking" className={classes.logo_cooking} />
        {recipe.cooking}
      </div>
      <div className={classes.cooking}>
        <img src={comments} alt="comments" className={classes.logo_cooking} />
        {recipe.comments}
      </div>
      <div className={classes.cooking}>
        <img
          src={variations}
          alt="variations"
          className={classes.logo_cooking}
        />
        {recipe.variations}
      </div>
      <div className={classes.cooking}>
        <img src={link} alt="link" className={classes.logo_cooking} />
        {recipe.linkToOtherSite}
      </div> */}
    </>
  );
}

export default Presentation;
