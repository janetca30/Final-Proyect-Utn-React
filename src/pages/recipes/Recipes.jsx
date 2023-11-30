import { useState } from 'react';
import Cocktail from './cocktail/Cocktail';
import cocktailsRecipes from '../../../dataCocktails';
import './Recipes.css'

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra las recetas según el término de búsqueda
  const filteredCocktails = cocktailsRecipes.filter(cocktail =>
    cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container-recipes'>
      <div className='search'>
        <input
          className='input-search'
          type="text"
          placeholder="search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredCocktails.map((cocktail, index) => (
        <Cocktail key={index} {...cocktail} />
      ))}
    </div>
  );
}

export default Recipes;
