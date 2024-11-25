import React from 'react';
import './RecipeDetails.css';
import data from '../data/recipes.json';
// import recette ciblée from la page resultats ?


// la recette qui est ciblée, à modifier en fonction de la carte qui est cliquée sur la page de résultats
const recette = data[1];
console.log(data[0]);

// Function qui gère l'affichage des tags en fonction de leur contenu et leur applique un id spécifique 
function TagList(props) {

  switch(props.tag) {
    case "30 minutes": 
    return (<div className="RecipeDetails-tag" id="min">Moins de {props.tag}</div>)
    break;

    case "Cuisine coréenne":
    return (<div className="RecipeDetails-tag" id="coreenne">{props.tag}</div>)
    break;

    case "Cuisine italienne": 
    return (<div className="RecipeDetails-tag" id="italienne">{props.tag}</div>)
    break;

    case "Cuisine japonaise": 
    return (<div className="RecipeDetails-tag" id="japonaise">{props.tag}</div>)
    break;

    default: 
    return (<div className="RecipeDetails-tag">{props.tag}</div>)
    break;
  }
}

// Function qui gère l'affichage individuel des étapes de la recette
// Elle retourne aussi le "Etape i" devant l'étape
function StepList(props) {
  return (
    <>
    <h3>Etape {props.index + 1}</h3>
    <div className="RecipeDetails-step">
      {props.step}
    </div>
    </>
  )
}

function MesIngredients(props) {
  return (
    <>
    <div className="RecipeDetails-ingredients">
        <img src={props.img} className="RecipeDetails-ingredient-img" />
        {props.quantity} {props.unit} de {props.name}
    </div>
    </>
  )
}
// If unit = unité, ne pas afficher "unité"
// If quantity = g, coller quantity et unit
// If name commence par a, e, i, o, u, h, afficher d' au lieu de de 

function addfav() {
  const fav = true;
  console.log("ok");

}

// Function qui crée la fiche de la recette pour chaque entité du tableau data 
export default function RecipeDetails() {    
    const tags = recette.tags;
    const ingredients = recette.ingredients;
    const steps = recette.steps;

    return (
      <div className="RecipeDetails">
        <img src={recette.url} className="RecipeDetails-img" />
        <div className="RecipeDetails-title-fav"><h1>{recette.title}</h1><button className="RecipeDetails-fav" onClick={handleclick}>Ajouter aux favoris</button>
        </div>

        <div className="RecipeDetails-tags">
            {tags.map((Taglist, index) => (
              <TagList key={index} tag={Taglist}/>
            ))}
        </div>

        <div className="RecipeDetails-ing-container">
            {ingredients.map((ingredients, index) => (
            <MesIngredients key={index} index={index} name={ingredients.name} quantity={ingredients.quantity} unit={ingredients.unit} img={ingredients.img} />
            ))}
        </div>

          <h2>Préparation</h2>
          <div className="RecipeDetails-steps">
              {steps.map((step, index) => (
                <StepList key={index} step={step} index={index} />
              ))}
          </div>
      </div>
    );

}

