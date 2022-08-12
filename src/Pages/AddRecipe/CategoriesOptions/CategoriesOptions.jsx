import React, { useState } from "react";
import classes from "./CategoriesOptions.module.css";
import SubCategoriesOptions from "../SubCategoriesOptions/SubCategoriesOptions";

function CategoriesOptions({
  register,
  categoryDefaultValue,
  subCategoryDefaultValue,
}) {
  const [activeCategory, setActiveCategory] = useState(categoryDefaultValue);

  const onCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  return (
    <>
      <label className={classes.label}>Categorie</label>
      <select
        className={classes.input}
        defaultValue={categoryDefaultValue}
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
      <SubCategoriesOptions
        category={activeCategory}
        register={register}
        defaultValue={subCategoryDefaultValue}
      />
    </>
  );
}

export default CategoriesOptions;
