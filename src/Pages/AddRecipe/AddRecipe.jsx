import React, { useContext, useState } from "react";
import classes from "./AddRecipe.module.css";
import { useForm } from "react-hook-form";
import CategoriesOptions from "./CategoriesOptions/CategoriesOptions";
import LabelInput from "./LabelInput/LabelInput";
import { createRecipe, updateRecipe } from "../../Apis/recipes.api";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";
import { useRecipeById } from "../../Hooks/useRecipeById";
import Spinner from "../../Components/Spinner/Spinner";

function AddRecipe() {
  const { loadRecipeById, isError, error, recipe, setRecipe, isLoading } =
    useRecipeById();

  const { isLoggedIn, token, clear } = useContext(AuthContext);
  const [editId, setEditId] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
    setRecipe({});
    const idToEdit = searchParams.get("id");
    setEditId(idToEdit);
    if (idToEdit) loadRecipeById(idToEdit);
  }, [searchParams]);

  const onSubmit = async (newRecipe) => {
    let redirectId;
    console.log("hey ho im here");
    try {
      if (!editId) {
        const createRecipeRes = await createRecipe(newRecipe, token);
        redirectId = createRecipeRes._id;
      } else {
        await updateRecipe(editId, newRecipe, token);
        redirectId = editId;
      }
    } catch (error) {
      //HACK - not the best solution
      console.error(error);
      if (error.message === "Request failed with status code 403") clear();
      return;
    }

    if (!redirectId) {
      console.error("no redirectId, something failed");
      return;
    }

    navigate(`../Recipe?id=${redirectId}`);
    reset();
  };

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (isError) return <div>Error: {error}</div>;
  if (isLoading) return <Spinner />;
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
              <CategoriesOptions
                register={register}
                categoryDefaultValue={recipe.category}
                subCategoryDefaultValue={recipe.subCategory}
                errors={errors}
              />
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
              {errors.grades && <p>{errors.grades.message}</p>}
              {/* <p className={classes.para}>{errors.grades?.message}</p> */}
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
          <button type="submit" className={classes.submit}>
            Soumettre
          </button>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
