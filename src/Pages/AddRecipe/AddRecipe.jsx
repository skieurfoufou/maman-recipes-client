import React, { useContext, useState } from "react";
import classes from "./AddRecipe.module.css";
import { useForm } from "react-hook-form";
import CategoriesOptions from "./CategoriesOptions/CategoriesOptions";
import LabelInput from "./LabelInput/LabelInput";
import { createRecipe, updateRecipe } from "../../Apis/recipes.api";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import ConfirmButton from "../../Components/ConfirmButton/ConfirmButton";
import { useEffect } from "react";
import * as recipesApi from "../../Apis/recipes.api";

function AddRecipe({ isEditMode }) {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [editId, setEditId] = useState("");
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const loadRecipeData = async (id) => {
    // setIsLoading(true);
    try {
      const response = await recipesApi.getOneRecipe(id);
      setRecipe(response);
    } catch (error) {
      // setIsError(true);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    reset();
    setRecipe({});
    const idToEdit = searchParams.get("id");
    setEditId(idToEdit);
    //TODO: get the recipe from the database and put it in the fields (useState)
    if (idToEdit) loadRecipeData(idToEdit);
  }, [searchParams]);

  const onSubmit = async (newRecipe) => {
    //TODO: call updtaeRecipe of we are in edit mode else call create
    if (!editId) {
      await createRecipe(newRecipe, token);
      console.log(`votre recette a ete cree:`, newRecipe);
    } else {
      await updateRecipe(editId, newRecipe, token);
      console.log(`votre recette a ete mis a jour:`, newRecipe);
    }

    navigate(`../${newRecipe.category}/${newRecipe.subCategory}`);
    //TODO: create a popup that say that your recipe has been created,
    // when click on the "OK" of the popup you need to clear the form
    reset();
  };

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title_h3}>
          {editId ? "MODIFIER UNE RECETTE" : "AJOUTER UNE RECETTE"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.container2}>
            <div className={classes.title}>
              <label className={classes.label}>Titre de la Recette</label>
              <input
                className={classes.input}
                defaultValue={recipe.title}
                {...register("title", { required: "Titre Obligatoire" })}
              />
              <p className={classes.para}>{errors.title?.message}</p>
              <CategoriesOptions register={register} defaultValue={recipe} />
            </div>
            <div className={classes.title}>
              <LabelInput
                register={register}
                name="Temps De Cuisson"
                input="cookingTime"
                cssStyle="thin"
                defaultValue={recipe.cookingTime}
              />
              <LabelInput
                register={register}
                name="Temps De Preparation"
                input="preparationTime"
                cssStyle="thin"
                defaultValue={recipe.preparationTime}
              />
              <LabelInput
                register={register}
                name="Nbre De Pers"
                input="numberOfPersons"
                cssStyle="thin"
                defaultValue={recipe.numberOfPersons}
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
                defaultValue={recipe.ingredients}
              />
              <LabelInput
                register={register}
                name="Preparation"
                input="preparation"
                cssStyle="wide"
                defaultValue={recipe.preparation}
              />
            </div>
            <div className={classes.subContainer}>
              <LabelInput
                register={register}
                name="Cuisson"
                input="cooking"
                cssStyle="wide"
                defaultValue={recipe.cooking}
              />
              <div className={classes.comments}>
                <div className={classes.title2}>
                  <LabelInput
                    register={register}
                    name="Commentaires"
                    input="comments"
                    cssStyle="thin"
                    defaultValue={recipe.comments}
                  />
                </div>
                <div className={classes.title2}>
                  <LabelInput
                    register={register}
                    name="Variations"
                    input="variations"
                    cssStyle="thin"
                    defaultValue={recipe.variations}
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
                defaultValue={recipe.grades}
                {...register("grades", { min: 1, max: 5 })}
              />
              <LabelInput
                register={register}
                name="Lien Exterieur"
                input="linkToOtherSite"
                cssStyle="thin"
                defaultValue={recipe.linkToOtherSite}
              />
              <LabelInput
                register={register}
                name="Lien Photos"
                input="linkToPhoto"
                cssStyle="thin"
                defaultValue={recipe.linkToPhoto}
              />
            </div>
          </div>
          {/* <input type="submit" className={classes.submit} /> */}
          <ConfirmButton
            className={classes.submit}
            type="submit"
            onConfirm={() => {}}
            buttonText={"Soumettre"}
            title={"vous avez creer une recette"}
            confirmText={"OK"}
          ></ConfirmButton>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
