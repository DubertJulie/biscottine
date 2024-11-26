import React from 'react';
import './RecipeDetails.css';
import data from '../data/recipes.json';
import './SavedRecipes.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


function SavedRecipeCard(props) {
    return (
        <div className="SavedRecipes-card">
            <Link to={`/recipe/${props.id}`}>
            <img src={props.url} className="RecipeResults-card-img" /></Link>

            <div className="SavedRecipes-card-info">
                <div className="SavedRecipes-card-title">{props.title}</div>
                <div className="SavedRecipes-card-preparation">{props.preparation_time}</div>
            </div>
        </div>
    )
}

function ViderFavoris() {
    localStorage.removeItem("favorites");
    window.location.reload();
}

export default function SavedRecipes() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const getFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(getFavorites()); // Affiche les IDs enregistrés

    const getRecipesByIds = (ids, data) => {
        const numericIds = ids.map(id => parseInt(id, 10));
        return data.filter((recipe) => numericIds.includes(recipe.id)); // Filtre les objets avec des IDs correspondants
    };

    const favoriteRecipes = getRecipesByIds(favorites, data);

    return (
        <>
            <div className="SavedRecipes">
                <div className="header-saved"><h2>Mes recettes sauvegardées</h2>        
                <button className="ViderFav" onClick={ViderFavoris}>Vider les favoris</button>
                </div> 
                <div className="SavedRecipes-container">
                    {favoriteRecipes.map((carte, index) => (
                        <SavedRecipeCard key={index} url={carte.url} title={carte.title} preparation_time={carte.preparation_time} id={carte.id} />
                    ))}
                </div>
            </div>w
        </>
    )
}