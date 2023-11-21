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

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(name.trim() !== '' && 
      description.trim() !== '' &&
      ingredients.trim() !== '' &&
      instructions.trim() !== '' &&
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
      setIngredients('');
      setInstructions('');
      setImageUrl('')
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
          <input className="input-name"
            type="text" 
            value={name}
            onChange={(e) => setName (e.target.value)}
            placeholder="Recipe Name"
          />
        </label>
        <label className="name">
          <input className="input-description"
            type="text"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
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
                <button type="button" onClick={() => handleRemoveIngredient(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newIngredient}
            onChange={(e)=>setNewIngredient(e.target.value)}
            placeholder="New Ingredient"
          />
          <button type="button" onClick={handleAddIngredient}>
              Add
          </button>
        </label>
        <label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e)=>setImageUrl(e.target.value)}
            placeholder="https://example.com/img.jpg"
          />
        </label>
      </div>
      <label>
        Instructions:
        <ul>
          {instructions.map((step, index) => (
            <li key={index}>
              {step}
              <button type="button" onClick={()=>handleRemoveInstruction(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newInstruction}
          onChange={(e)=>setInstructions(e.target.value)}
          placeholder="New Step"
        />
        <button type="button" onClick={handleAddInstruction}>
          Add
        </button>
      </label>
      <button 
        type="submit"
        >Add Recipe
      </button>
    </form>
  );
};

RecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};

export default RecipeForm