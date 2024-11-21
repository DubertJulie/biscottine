import React from 'react';
import './RecipeResults.css';
import recipe from '../assets/recipe.jpg';
import './RecipeDetails.css';

export default function RecipeDetails() {
    return (
        <>
        <div className="RecipeDetails">
            <img src={recipe} />
            <h1>Titre de la recette</h1>
            <p className="RecipeDetails-tags">Cuisine orientale</p>
            <div className="RecipeDetails-ingredients">Ail</div>       

            <h2>Préparation</h2>
            <div className="RecipeDetails-steps">
                <h3>Etape 1</h3>
                Cuire les pâtes
            </div>
        </div>
        
        </>
    )
}