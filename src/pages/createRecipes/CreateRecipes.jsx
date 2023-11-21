import { useState, useEffect } from 'react';
import RecipeList from './recipeList/RecipeList';
import RecipeForm from './recipeForm/RecipeForm';
import Cocktail from './../recipes/cocktail/Cocktail';
import './CreateRecipes.css'

const CreateRecipes = () => {
    
    const [recipes, setRecipes] = useState([]);

    
    useEffect(() => {
        try {
            const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
            console.log ('Recipes Uploaded:', savedRecipes)
            setRecipes(savedRecipes);
            
        } catch (error) {
            console.error("No recipe found in local storage", error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    // marcada o no marcada como completada
    const completeRecipe = (id) => {
        const newRecipes = recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, completed: !recipe.completed } : recipe
        );
        setRecipes(newRecipes);
    };

    // Eliminar de la lista
    const deleteRecipe = (id) => {
        const newRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(newRecipes);
    };

    // Agregar a la lista
    const addRecipe = (newRecipeDetails) => {
        const newRecipe = {
            id: Date.now(),
            completed: false,
            ...newRecipeDetails,
        };
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div>
            <div className='title-recipe'>
                <h2>Create your Recipe</h2>
            </div>        

            <RecipeList
                recipes={recipes}
                completeRecipe={completeRecipe}
                deleteRecipe={deleteRecipe}
                RecipeComponent={Cocktail}
            />
        
            <RecipeForm 
                addRecipe={addRecipe} 
            />
        </div>
    );
    };

export default CreateRecipes;