import React from "react";
import classes from "./SubCategoriesOptions.module.css";

function SubCategoriesOptions({ register, category }) {
  const getSubCategory = () => {
    switch (category) {
      case "Breads":
        return (
          <>
            <option value="Halots">Halots</option>
            <option value="Dough">Les # pates</option>
            <option value="OthersBreads">Autres pains</option>
          </>
        );
      case "Entries":
        return (
          <>
            <option value="FreshSalads">Salades Fraiches</option>
            <option value="CookedSalads">Salades Cuites</option>
            <option value="Soups">Soupes</option>
            <option value="Sauces">Sauces</option>
          </>
        );
      case "MainCourses":
        return (
          <>
            <option value="Meats">Viandes</option>
            <option value="Fishes">Poissons</option>
            <option value="Chickens">Poulets</option>
            <option value="Dairies">Plats au Lait</option>
            <option value="Vegans">Vegan</option>
            <option value="Holidays">Plats de Fetes</option>
          </>
        );
      case "Desserts":
        return (
          <>
            <option value="Cakes">Gateaux</option>
            <option value="Pies">Tartes</option>
            <option value="DessertsPlus">Entremets et +</option>
            <option value="Passover">Pessah</option>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <label className={classes.label}>Sous-Categorie</label>
      <select
        className={classes.input}
        {...register("subCategory", {
          required: "Sous-Categorie Obligatoire",
          disabled: category === "",
        })}
      >
        {getSubCategory()}
      </select>
    </>
  );
}

export default SubCategoriesOptions;
