import React from 'react';
import './RecipeResults.css';
import data from '../data/recipes.json';



// function qui crée une carte pour chaque entité du tableau data 
function RecipeCard(props) {
        return (        
            <div className="RecipeResults-card">
    
                <img src={props.url} className="RecipeResults-card-img"/> 
    
                <div className="RecipeResults-card-info"> 
                    <div className="RecipeResults-card-title">{props.title}</div>
                    <div className="RecipeResults-card-preparation">{props.preparation_time}</div>
                </div>
            </div>
        )

}

// Function pour peupler le div container RecipeResults
export default function RecipeResults() {

    return (
        <>
        <div className="RecipeResults">

        {data.map((carte, index) => (

                <RecipeCard 
                key={index}
                url={carte.url} 
                title={carte.title}
                preparation_time={carte.preparation_time} 
                tags={carte.tags} 
                />

                

            ))}

        </div>
        </>
    )
}

