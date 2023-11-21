import Cocktail from "./cocktail/Cocktail";
import cocktailsRecipes from "../../../dataCocktails";



function Recipes() {
  return (
    <>
      <div>
        {cocktailsRecipes.map((cocktail, index) => (
          <Cocktail 
            key={index}{...cocktail} 
            
          />
        ))}
      </div>
    </>
      )
}

export default Recipes;