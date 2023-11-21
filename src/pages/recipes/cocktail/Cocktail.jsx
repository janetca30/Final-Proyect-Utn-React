import PropTypes from 'prop-types';
import './Cocktail.css'

function Cocktail(props) {
  return (
    <div className='cocktail'>
      <div className='name'>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className='half'>
        <div className='ingredients'>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {props.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='image'>
          <img src={props.imageUrl} alt={props.name} />
        </div>
      </div>
      <div className='instructions'>
        <p><strong>Instructions:</strong></p>
        <ul>
          {props.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul> 
      </div>
      
    </div>
  );
}

Cocktail.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string
};

export default Cocktail;

