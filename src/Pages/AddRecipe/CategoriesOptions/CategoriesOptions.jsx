import React, { useState } from "react";
import classes from "./CategoriesOptions.module.css";
import SubCategoriesOptions from "../SubCategoriesOptions/SubCategoriesOptions";

function CategoriesOptions({ register }) {
  const [activeCategory, setActiveCategory] = useState("");

  const onCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <>
      <label className={classes.label}>Categorie</label>
      <select
        className={classes.input}
        {...register("category", {
          required: "Categorie Obligatoire",
          onChange: onCategoryChange,
        })}
      >
        <option value=""></option>
        <option value="Breads">Pains</option>
        <option value="Entries">Entrees</option>
        <option value="MainCourses">Plats Principaux</option>
        <option value="Desserts">Desserts</option>
      </select>
      <SubCategoriesOptions category={activeCategory} register={register} />
    </>
  );
}

export default CategoriesOptions;
