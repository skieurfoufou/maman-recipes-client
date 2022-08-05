import classes from "./RecipeDetails.module.css";
import Ingredients from "./Ingredients/Ingredients";
import Preparation from "./Preparation/Preparation";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import Presentation from "./Presentation/Presentation";

function RecipeDetails({ recipe }) {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <h1 className={classes.title}>{recipe.title}</h1>
        <TimeDisplay
          preparationTime={recipe.preparationTime}
          cookingTime={recipe.cookingTime}
          grades={recipe.grades}
        />
        <Ingredients ingredients={recipe.ingredients} />
        <Preparation preparation={recipe.preparation} />
        <Presentation recipe={recipe} />
      </div>

      <div className={classes.imgContainer}>
        <img src={recipe.linkToPhoto} alt={recipe.title}></img>
      </div>
    </div>
  );
}

export default RecipeDetails;
