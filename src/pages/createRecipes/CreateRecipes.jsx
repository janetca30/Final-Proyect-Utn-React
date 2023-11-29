
import { useState, useEffect } from 'react';
import RecipeList from './recipeList/RecipeList';
import RecipeForm from './recipeForm/RecipeForm';
import Cocktail from './../recipes/cocktail/Cocktail';
import './CreateRecipes.css';

const CreateRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);

    useEffect(() => {
        try {
            const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
            console.log('Recipes Uploaded:', savedRecipes);
            setRecipes(savedRecipes);
        } catch (error) {
            console.error('No recipe found in local storage', error);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    // marcada o no marcada como completada
    const completeRecipe = (id) => {
        const recipeToEdit = recipes.find(recipe => recipe.id === id)

        const recipesUpdates = recipes.map(recipe =>
            recipe.id === id ? { ...recipe, completed: !recipe.completed }: recipe)


        setRecipes(recipesUpdates)
        setEditingRecipe(recipeToEdit);
    };

    // eliminar receta
    const deleteRecipe = (id) => {
        const newRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(newRecipes);
        
        if (editingRecipe && editingRecipe.id === id) {
            setEditingRecipe(null);
        }
    };

    // Agregar a la lista
    const addRecipe = (newRecipeDetails) => {
        if (editingRecipe) {
            // Si estás editando, actualiza la receta existente
            const updatedRecipes = recipes.map(recipe =>
                recipe.id === editingRecipe.id ? { ...recipe, ...newRecipeDetails } : recipe
            );
            setRecipes(updatedRecipes);
            setEditingRecipe(null); // Sale del modo de edición después de actualizar
        } else {
            // Si no estás editando, agrega una nueva receta
            const newRecipe = {
                id: Date.now(),
                completed: false,
                ...newRecipeDetails,
            }
            setRecipes (prevRecipes =>[...prevRecipes, newRecipe]);
        }
    }

    return (
        <div>
            <div className="title-recipe">
                <h2>Create your Recipe</h2>
            </div>
            <div className='recipe-container'>
                {editingRecipe ? (
                    <RecipeForm addRecipe={addRecipe} initialRecipe={editingRecipe} />
                ) : (
                    <RecipeForm addRecipe={addRecipe} />
                )}
                <RecipeList
                    recipes={recipes}
                    completeRecipe={completeRecipe}
                    deleteRecipe={deleteRecipe}
                    RecipeComponent={Cocktail}
                />
            </div>
        </div>
    );
};

export default CreateRecipes; 
