import React, { useContext } from "react";
import classes from "./AddRecipe.module.css";
import { useForm } from "react-hook-form";
import CategoriesOptions from "./CategoriesOptions/CategoriesOptions";
import LabelInput from "./LabelInput/LabelInput";
import { createRecipe } from "../../Apis/recipes.api";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

function AddRecipe() {
  const { isLoggedIn, token } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newRecipe) => {
    createRecipe(newRecipe, token);
  };

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title_h3}>AJOUTER UNE RECETTE</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.container2}>
            <div className={classes.title}>
              <label className={classes.label}>Titre de la Recette</label>
              <input
                className={classes.input}
                {...register("title", { required: "Titre Obligatoire" })}
              />
              <p>{errors.title?.message}</p>
              <CategoriesOptions register={register} />
            </div>
            <div className={classes.title}>
              <LabelInput
                register={register}
                name="Temps De Cuisson"
                input="cookingTime"
                cssStyle="thin"
              />
              <LabelInput
                register={register}
                name="Temps De Preparation"
                input="preparationTime"
                cssStyle="thin"
              />
              <LabelInput
                register={register}
                name="Nbre De Pers"
                input="numberOfPersons"
                cssStyle="thin"
              />
            </div>
          </div>
          <div className={classes.container2}>
            <div className={classes.subContainer}>
              <LabelInput
                register={register}
                name="Ingredients"
                input="ingredients"
                cssStyle="wide"
              />
              <LabelInput
                register={register}
                name="Preparation"
                input="preparation"
                cssStyle="wide"
              />
            </div>
            <div className={classes.subContainer}>
              <LabelInput
                register={register}
                name="Cuisson"
                input="cooking"
                cssStyle="wide"
              />
              <div className={classes.comments}>
                <div className={classes.title2}>
                  <LabelInput
                    register={register}
                    name="Commentaires"
                    input="comments"
                    cssStyle="thin"
                  />
                </div>
                <div className={classes.title2}>
                  <LabelInput
                    register={register}
                    name="Variations"
                    input="variations"
                    cssStyle="thin"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.container2}>
            <div className={classes.title}>
              <label className={classes.label}>Notes</label>
              <input
                className={classes.input}
                placeholder="notes de 1 a 5"
                {...register("grades", { min: 1, max: 5 })}
              />
              <LabelInput
                register={register}
                name="Lien Exterieur"
                input="linkToOtherSite"
                cssStyle="thin"
              />
              <LabelInput
                register={register}
                name="Lien Photos"
                input="linkToPhoto"
                cssStyle="thin"
              />
            </div>
          </div>
          <input type="submit" className={classes.submit} />
        </form>
      </div>
      )
    </>
  );
}

export default AddRecipe;
