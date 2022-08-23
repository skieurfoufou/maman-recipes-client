import classes from "./RecipeDetails.module.css";
import Ingredients from "./Ingredients/Ingredients";
import Preparation from "./Preparation/Preparation";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import Presentation from "./Presentation/Presentation";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { deleteRecipe } from "../../Apis/recipes.api";
import { useNavigate } from "react-router-dom";
import ConfirmButton from "../ConfirmButton/ConfirmButton";
import Cooking from "./Cooking/Cooking";
import Presentation1 from "./Presentation1/Presentation1";

function RecipeDetails({ recipe }) {
  const { isLoggedIn, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEdit = async () => {
    const recipeId = recipe._id;
    navigate(`../AddRecipe?id=${recipeId}`);
  };

  //TODO: make the "OK" button of the popup call this fn
  const handleDelete = async () => {
    try {
      await deleteRecipe(recipe._id, token);
      navigate("../");
    } catch (error) {
      if (error.response.status === 403) {
        //TODO: call the clearToken function
        // OPTIONAL: redirect to login page
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <h1 className={classes.title}>{recipe.title}</h1>
        <TimeDisplay
          preparationTime={recipe.preparationTime}
          cookingTime={recipe.cookingTime}
          grades={recipe.grades}
          numberOfPersons={recipe.numberOfPersons}
        />
        <Ingredients ingredients={recipe.ingredients} />
        <Preparation preparation={recipe.preparation} />
        <Cooking cooking={recipe.cooking} />
        {/* <Presentation1 recipe={recipe} /> */}
        <Presentation recipe={recipe} />
        {isLoggedIn && (
          <div className={classes.buttons}>
            <button className={classes.button} onClick={handleEdit}>
              editer
            </button>

            {/* <div className={classes.button} onClick={handleDelete}>
              delete
            </div> */}
            <ConfirmButton
              className={classes.button}
              onConfirm={() => handleDelete()}
              buttonText={"effacer"}
              title={"effacer une recette"}
              confirmText={"oui, je veux effacer"}
              cancelText={"non, laisser moi reflechir"}
            ></ConfirmButton>
          </div>
        )}
      </div>

      <div className={classes.imgContainer}>
        <img src={recipe.linkToPhoto} alt={recipe.title}></img>
      </div>
    </div>
  );
}

export default RecipeDetails;
