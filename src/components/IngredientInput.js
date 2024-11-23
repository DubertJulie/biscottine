
import React, { useState } from 'react';

// Le json 
import data from './data/recipes.json';
// le css 
import './IngredientInput.css';
// image de la mascotte 
import mascotteBiscottine from '../assets/mascotte.png'
// le logo 
import logoInputIngredient from '../assets/logo.png'




function IngredientInput() {
    // stock la recherche 
    const [saisie, setSaisie] = useState("");
    // Pourquoi const car tu modifie l'état lui meme et non saisie
    // ici on utilise la valeur d'etat saisie et setSaisie qui permet de mettre a jour l'etat de saisie

    // garder les ingredient 
    const [ingredientGarder, setIngredientGarder] = useState([]);
    // Le tableau vide permet que quand l'utilisateur press le button sa rentre dans le tableau vide

    // ingredient eviter
    const [ingredientEviter, setIngredientEviter] = useState([]);

    // Ici on recupere la saisie de l'utilisateur et met a jour saisie
    const rechercheChangement = (event) => {
        setSaisie(event.target.value);
    };
    // event convention pour dire Evenement parfois racourci par e 

    // permet de suprimer des ingredient de "eviter " 
    const suprimerDeEviter = (ingredient) => {
        setIngredientEviter((prev) => prev.filter(item => item.name !== ingredient.name));
    };
    // Pourquoi prev ? une convention pour dire précédent sa represente l'etat avant le changement 

    //   permet de suprimer les ingredient de "garder"  
    const suprimerDeGarder = (ingredient) => {
        setIngredientGarder((prev) => prev.filter(item => item.name !== ingredient.name));
    };

    // c'est un if else pour donner le choix si lélément est a éviter ou garder 
    const ingredientChoix = (ingredient, choix) => {
        if (choix === "Garder") {
            setIngredientGarder((prev) => [...prev, ingredient]);
            // les "..." la décomposition Pour dire "le reste" 
            setIngredientEviter((prev) => prev.filter(item => item.name !== ingredient.name));
        } else if (choix === "Eviter") {
            setIngredientEviter((prev) => [...prev, ingredient]);
            setIngredientGarder((prev) => prev.filter(item => item.name !== ingredient.name));
        }
    };
    // sa permet de selectionner uniquement les ingredient dans le tableau 
    const toutIngredients = data.flatMap(recipe => recipe.ingredients);

    // filtrer les ingredient et prendre en compte les majuscule et les mettre en minuscule pris de la saisie utilisateur 
    const filtreIngredients = toutIngredients.filter(ingredient =>
        saisie === '' || ingredient.name.toLowerCase().includes(saisie.toLowerCase())
    );



    return (

        <div className="encadrementIngredientInput">


            {/* Image de la mascotte  */}
            <img className='biscottineMascotteInput' src={mascotteBiscottine} alt='' />
            {/* Image du logo  */}
            <img className='titreLogoInput' src={logoInputIngredient} alt='' />
            {/* Texte entredessous du Logo  */}
            <p className='texteSousLogoInput'>Trouve-moi <br /> une recette !</p>

            <p>efege</p>
            <p>fefeg</p>
            {/* input pour la saisie utilisateur  */}
            <input className="ingredientInput"
                value={saisie}
                onChange={rechercheChangement}
                type="text"
                placeHolder=" Yes" />


             {/* resultat recherche  */}
            {saisie !== '' && (
                <div className="alignementInputRecherche">
                    {filtreIngredients.map((ingredient, index) => (
                        <div key={index} className="">
                            
                            <ul className='inputIngredientName'>
                                {/* ce qui aparait dans la barre de recherche  */}
                            <li className=''>{ingredient.name}</li>
                            </ul>
                            {/* button garder  */}
                            <button
                                onClick={() => ingredientChoix(ingredient, "Garder")}
                                disabled={ingredientGarder.some(item => item.name === ingredient.name)}
                                // le disabled dit si l'ingredient est garder tu ne pourras pas reclicker dessus 
                                // some renverras true si item.name est strictement egal a ingredient.name 
                            >
                                {/* ici faut mettre l'image "+" */}
                                Garder
                            </button>

                            {/* button  eviter  */}
                            <button
                                onClick={() => ingredientChoix(ingredient, "Eviter")}
                                disabled={ingredientEviter.some(item => item.name === ingredient.name)}
                            >
                                {/* ici faut mettre l'image "-" */}
                                Eviter
                            </button>
                        </div>
                    ))}
                </div>
            )}

       {saisie !== '' && (
        <div className="selections">
          <p className='inputIngredientGarder'>Ingrédients gardés :</p>
          <ul>
            {ingredientGarder.map((ingredient, index) => (
              <li key={index}>
                <img src={ingredient.image} alt='' className="ingredient-image" />
                {/* button pour suprimer de a garder  */}
                <button onClick={() => suprimerDeGarder(ingredient)}>
                    {/* l'icone suprimer a mettre  */}
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <p className='inputIngredientEviter' >Ingrédients évités :</p>
          <ul>
            {ingredientEviter.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name}
                {/* button pour suprimer de a eviter  */}
                <button onClick={() => suprimerDeEviter(ingredient)}>
                    {/* l'icone suprimer a mettre  */}
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}



        </div>

    )
};


export default IngredientInput;