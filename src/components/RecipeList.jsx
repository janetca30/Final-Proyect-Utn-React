import PropTypes from 'prop-types'
import Recipe from './Recipe'

const RecipeList = ({ recipes, completeRecipe, deleteRecipe }) => {
  return (
    <div>
      <h2>My Recipe</h2>
      {recipes.map((recipe) =>(
      <Recipe
        key={recipe.id}
        recipe={recipe}
        completeRecipe={completeRecipe}
        deleteRecipe={deleteRecipe} 
      />
      ))}
    </div>
  )
}
RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  completeRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired
}
export default RecipeList