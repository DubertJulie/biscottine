import React from 'react';
import './RecipeDetails.css';
import data from '../data/recipes.json';

// export default function RecipeDetails() {
//     return (
//         <>
//         <div className="RecipeDetails">
//             <img src={recipe} />
//             <h1>Titre de la recette</h1>
//             <div className="RecipeDetails-tags">
//                 <div className="RecipeDetails-tag" id="japonaise">Cuisine japonaise</div>
//                 <div className="RecipeDetails-tag" id="min">30 minutes</div>

//             </div>

//             <div className="RecipeDetails-ingredients">
//                 <div className="RecipeDetails-ingredient">Ail</div>
//             </div>       

//             <h2>Préparation</h2>
//             <div className="RecipeDetails-steps">
//                 <h3>Etape 1</h3>
//                 Cuire les pâtes
//             </div>
//         </div>
        
//         </>
//     )
// }

// la recette qui est ciblée, à modifier en fonction de la carte qui est cliquée sur la page de résultats
const recette = data[0];

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
    <h3>Etape</h3>
    <div className="RecipeDetails-step">
      {props.step}
    </div>
    </>
  )
}

// function qui crée la fiche de la recette pour chaque entité du tableau data 
export default function RecipeDetails() {    
    const tags = recette.tags;
    // const ingredients = recette.ingredients;
    const steps = recette.steps;
    console.log(steps);


    return (
      <div className="RecipeDetails">
        <img src={recette.url} className="RecipeDetails-card-img" />
        <h1>{recette.title}</h1>

        <div className="RecipeDetails-tags">
            {tags.map((Taglist, index) => (
              <TagList key={index} tag={Taglist}/>
            ))}
        </div>

        <div className="RecipeDetails-ingredients">

        </div>

          <h2>Préparation</h2>
          <div className="RecipeDetails-steps">
            {/* {steps.map((StepList) => (
              <StepList step={StepList} />
              }
            ))}  */}
          </div>
      </div>
    );


}

// Appeler l'élément du JSON
// Appeler l'image, le titre

// Appeler les tags > pour chaque entrée du sous-tableau, afficher image + quantité + unité

// Afficher les étapes de la préparation "étape i + steps"