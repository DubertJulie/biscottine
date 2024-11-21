import React from 'react';
import './RecipeResults.css';
import recipe from '../assets/recipe.jpg';
import recipe2 from '../assets/recipe2.jpg';

export default function RecipeResults() {
    return (
        <>
        <div className="RecipeResults">
            <div className="RecipeResults-card">

                <img src={recipe} className="RecipeResults-card-img"/> 

                <div className="RecipeResults-card-info">
                    <div className="RecipeResults-card-title">Nouilles à la japonaise</div>
                    <div className="RecipeResults-card-preparation">30 minutes</div>
                </div>

            </div>
        </div>
        </>
    );
}
