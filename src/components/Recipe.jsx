import PropTypes from 'prop-types'

const Recipe = ({ recipe, completeRecipe, deleteRecipe }) => {
  const { id, name, completed } = recipe

  const added = () => {
    completeRecipe(id)
  }

  const remove = () => {
    deleteRecipe(id)
  }

  return (
    <div className="recipe">
      <span className={completed ? 'completed' : ''} >
        {name}
      </span>
      <button onClick={added}>
        {completed ? 'Slope' : 'Added'}
      </button>
      <button onClick={remove}>Delete
      </button>
    </div>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default Recipe

