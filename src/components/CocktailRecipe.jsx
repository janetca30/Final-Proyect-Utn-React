import PropTypes from 'prop-types'

function CocktailRecipe (props){
  return(
    <div className="recipe">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{props.ingredients}</p>
      <p>{props.instructions}</p>
      <img src={props.imageUrl} alt={`${props.name}`}/>
    </div>
  )
}
CocktailRecipe.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.string,
  instructions: PropTypes.string,
  imageUrl: PropTypes.string,
}


export default CocktailRecipe;