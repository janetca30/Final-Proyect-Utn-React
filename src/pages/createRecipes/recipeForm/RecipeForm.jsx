import { useState } from "react";
import PropTypes from 'prop-types'
import './RecipeForm.css'

const RecipeForm = ({ addRecipe }) => {
  
  const [ name, setName] = useState('');
  const [ description, setDescription] = useState('');
  const [ ingredients, setIngredients] = useState([]);
  const [ instructions, setInstructions] = useState([]);
  const [ imageUrl, setImageUrl] = useState('');
  const [ newIngredient, setNewIngredient] = useState('');
  const [ newInstruction, setNewInstruction] = useState('');

  const handleEnterKey = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();

      const formInputs = document.querySelectorAll('.cocktail input, .cocktail textarea');
      const currentInput = e.target;
      const currentIndex = Array.from(formInputs).indexOf(currentInput);

      if (currentIndex < formInputs.length -1) {
        const nextInput = formInputs[currentIndex +1];
        nextInput.focus();
      }
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(
      name.trim() !== '' && 
      description.trim() !== '' &&
      ingredients.length > 0 &&
      instructions.length > 0 &&
      imageUrl.trim() !== ''
    ){
      //Crea un nuevo objeto de receta
      
      const newRecipe = {
        name,
        description,
        ingredients,
        instructions,
        imageUrl,
      };
      
      //llama a la funcion y agrega la receta
      addRecipe(newRecipe);

      //limpia el form 
      setName('');
      setDescription('');
      setIngredients([]);
      setInstructions([]);
      setImageUrl('');
    }
  };

  const handleAddIngredient = () => {
    if (newIngredient.trim() !== ''){
      setIngredients([...ingredients, newIngredient.trim()])
      setNewIngredient('')
    }
  }
  const handleAddInstruction = () => {
    if (newInstruction.trim() !== ''){
      setInstructions([...instructions, newInstruction.trim()])
      setNewInstruction('')
      }
      }
    
  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients]
    updatedIngredients.splice(index, 1)
    setIngredients(updatedIngredients)
  }
  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...instructions]
    updatedInstructions.splice(index, 1)
    setInstructions(updatedInstructions)
    }

  return (
    <form className="cocktail" onSubmit={handlerSubmit}>
      <div className="name">
        <label className="name">
          <input 
            className="input-name"
            type="text" 
            value={name}
            onChange={(e) => setName (e.target.value)}
            onKeyDown={handleEnterKey}
            placeholder="Recipe Name"
          />
        </label>
        <label className="name">
          <textarea 
            className="input-description"
            type="text"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            onKeyDown={handleEnterKey}
            placeholder="Recipe Description"
          />
        </label>
      </div>
      <div className="half">
        <label className="ingredients">
          Ingredients:
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
                <button className="minus" type="button" onClick={() => handleRemoveIngredient(index)}>
                  -
                </button>
              </li>
            ))}
          </ul>
          <input className="input-ingredients"
            type="text"
            value={newIngredient}
            onChange={(e)=>setNewIngredient(e.target.value)}
            placeholder="New Ingredient"
          />
          <button className="more" type="button" onClick={handleAddIngredient}>
            +
          </button>
        </label>
        <label className="image">
          <input  className="input-image"
            type="url"
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder="https://example.com/img.jpg"
          />
          {imageUrl && <img src={imageUrl} alt="image-recipe" className="image-recipe" />}
        </label>
      </div>
      <div className="instructions">
        <label className="instructions">
          Instructions:
          <ul>
            {instructions.map((instruction, index) => (
              <li key={index}>
                {instruction}
                <button className="minus" type="button" onClick={()=>handleRemoveInstruction(index)}>
                  -
                </button>
              </li>
            ))}
          </ul>
          <input className="input-instructions"
            type="text"
            value={newInstruction}
            onChange={(e)=>setNewInstruction(e.target.value)}
            placeholder="New Instruction"
          />
          <button className="more" type="button" onClick={handleAddInstruction}>
            +
          </button>
        </label>
      </div>
      <div className="submit">
        <button 
          type="submit"
          >Add Recipe
        </button>
      </div>
    </form>
  );
};

RecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeForm