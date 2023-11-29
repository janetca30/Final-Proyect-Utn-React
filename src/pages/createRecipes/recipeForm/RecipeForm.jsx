import { useState } from "react";
import PropTypes from 'prop-types'
import './RecipeForm.css'

const RecipeForm = ({ addRecipe, initialRecipe }) => {

  const [name, setName] = useState(initialRecipe ? initialRecipe.name : '');
  const [description, setDescription] = useState(initialRecipe ? initialRecipe.description : '');
  const [ingredients, setIngredients] = useState(initialRecipe ? [...initialRecipe.ingredients] : []);
  const [instructions, setInstructions] = useState(initialRecipe ? [...initialRecipe.instructions] : []);
  const [imageUrl, setImageUrl] = useState(initialRecipe ? initialRecipe.imageUrl : '');
  const [newIngredient, setNewIngredient] = useState('');
  const [newInstruction, setNewInstruction] = useState('')

  const handleEnterKey = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();

      const formInputs = document.querySelectorAll('.recipe-form input, .recipe-form textarea');
      const currentInput = e.target;
      const currentIndex = Array.from(formInputs).indexOf(currentInput);

      if (currentIndex < formInputs.length -1) {
        const nextInput = formInputs[currentIndex +1];
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      name.trim() !== '' && 
      description.trim() !== '' &&
      ingredients.length > 0  &&
      instructions.length > 0 &&
      imageUrl.trim() !== ''
    ){
      //Crea un nuevo objeto de receta
      
      const newRecipe = {
        name,
        description,
        ingredients,
        instructions,
        imageUrl
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

    const handleImageChange = (e) => {
      setImageUrl(e.target.value);
    };

  return (
    <form className="recipe-form" onSubmit={handleSubmit} >
      <div className="title-descrip">
        <label className="name">
          <input 
            className="input-name"
            type="text"
            value={name}
            placeholder="Recipe name"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleEnterKey}
          />
        </label>
        <label className="description">
          <textarea 
            className="input-description"
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleEnterKey}
          />
        </label>
      </div>
      <div className="half">
        <label className="ingredients">
          Ingredients:
          <ul>
            {ingredients.map((ingredient, index) => (
              <li 
                key={index}>
                {ingredient}
                <button 
                  className="minus" 
                  type="button" 
                  onClick={() => handleRemoveIngredient(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <input
            className="input-ingredients"
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            onKeyDown={handleEnterKey}
            placeholder="New Ingredient"
          />
          <button
            className="plus"
            type="button"
            onClick={handleAddIngredient}
          >
            +
          </button>
        </label>
        <label className="image">
          {imageUrl ? (
            <img className="preview-image" src={imageUrl} alt="Preview" />
          ) : (
            <input 
              className="input-image"
              type="url"
              value={imageUrl}
              placeholder="https://example.com/img.jpg"
              onChange={handleImageChange}
            />
          )}
        </label>
      </div>
      <div className="instructions">
        <label className="instructions">
          Instructions:
          <ul>
            {instructions.map((instruction, index) => (
              <li 
                key={index}>
                {instruction}
                <button 
                  className="minus" 
                  type="button" 
                  onClick={() => handleRemoveInstruction(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <input
            className="input-instructions"
            type="text"
            value={newInstruction}
            onChange={(e) => setNewInstruction(e.target.value)}
            onKeyDown={handleEnterKey}
            placeholder="New Instruction"
          />
          <button
            className="plus"
            type="button"
            onClick={handleAddInstruction}
          >
            +
          </button>
        </label>
      </div>
      <div className="submit">
        <button className="new-recipe" type="submit" >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

RecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  initialRecipe: PropTypes.object,
};

export default RecipeForm;