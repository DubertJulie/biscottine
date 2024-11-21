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
            <div className="RecipeDetails-tags">
                <div className="RecipeDetails-tag" id="japonaise">Cuisine japonaise</div>
                <div className="RecipeDetails-tag" id="min">30 minutes</div>

            </div>

            <div className="RecipeDetails-ingredients">
                <div className="RecipeDetails-ingredient">Ail</div>
            </div>       

            <h2>Préparation</h2>
            <div className="RecipeDetails-steps">
                <h3>Etape 1</h3>
                Cuire les pâtes
            </div>
        </div>
        
        </>
    )
}