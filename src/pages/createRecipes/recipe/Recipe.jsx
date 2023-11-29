import PropTypes from 'prop-types'
import './Recipe.css'

const Recipe = ({ recipe, completeRecipe, deleteRecipe }) => {
  const { id, name, completed, description, ingredients, instructions, imageUrl } = recipe

  const handleComplete = () => {
    completeRecipe(id)
  }

  const handledelete = () => {
    deleteRecipe(id)
  }

  return (
    <div className="createRecipe">
      <div className='recipe'>
        <div className="createName">
          <span className={completed ? 'completed' : ''} >
            {name}
          </span>
        </div>
        <div className='recipeCard'>
          {completed && (
            <>
              <div className='cardDescription'>
                <p>{description}</p>
              </div>
              <div className='cardHalf'>
                <div className='cardIngredients'>
                  <p>Ingredients:</p>
                  <ul>
                    {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className='cardImage'>
                  <img className='image-card' src={imageUrl} alt="Recipe Preview" />
                </div>
              </div>
              <div className='instructions'>
                <p>Instructions:</p>
                <ul>
                    {instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                </ul>
              </div>
            </>
          )}
        </div>
        <div className='complete-delete'>
          <button className='complete' onClick={handleComplete}>
            {completed ? 'Undo' : 'Complete'}
          </button>
          <button className='delete' onClick={handledelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );

}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
    imageUrl: PropTypes.string,
  }).isRequired,
  completeRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default Recipe

