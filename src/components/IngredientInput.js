
import React, { useState } from 'react';
// Le json 
import data from '../data/recipes.json';
// le css 
import './IngredientInput.css';
// css des card
import './RecipeResults.css';
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
    // ingredient eviter
    const [ingredientEviter, setIngredientEviter] = useState([]);
    // tag 
    const [selectedTags, setSelectedTags] = useState([]);

    const rechercheChangement = (event) => {
        setSaisie(event.target.value);
    };

    // permet de suprimer des ingredient de "eviter " 
    const suprimerDeEviter = (ingredient) => {
        setIngredientEviter((prev) => prev.filter(item => item.name !== ingredient.name));
    };
    //   permet de suprimer les ingredient de "garder"  
    const suprimerDeGarder = (ingredient) => {
        setIngredientGarder((prev) => prev.filter(item => item.name !== ingredient.name));
    };

    // sa gere l'affichage des button tags pour qu'il ny est pas de doubon dans L'afichage 
    const affichageTag = (tag) => {
        setSelectedTags((previous) =>
            previous.includes(tag) ? previous.filter((tri) => tri !== tag) : [...previous, tag]
        );
    };

    // permet de verifier si chaque tag est unique dans le json 
    const toutLesTags = Array.from(new Set(data.flatMap(recipe => recipe.tags)));


    const filteredRecipes = data.filter((recipe) => {
        const recetteIngredients = recipe.ingredients.map(ing => ing.name.toLowerCase());
        // Vérifie si tous les ingrédients gardés sont dans la recette
        const contientIngredientsGarder = ingredientGarder.length === 0 ||
            ingredientGarder.some((ingredient) =>
                recetteIngredients.includes(ingredient.name.toLowerCase())
            );
        // Vérifie que la recette ne contient pas d'ingrédients évités
        const contientIngredientsEviter = ingredientEviter.some((ingredient) =>
            recetteIngredients.includes(ingredient.name.toLowerCase())
        );
        // La premiere verifie si aucun tag n'est selectionner la deuxieme si un tag est selectionner verifie si le tag est dans le repas afficher 
        const contientTags = selectedTags.length === 0 || selectedTags.every((tag) =>
            recipe.tags.includes(tag)
        );
        // Retourne true si la recette contient tous les ingrédients gardés et aucun évité, 
        return contientIngredientsGarder && !contientIngredientsEviter && contientTags;
    });

    //if else pour donner le choix si lélément est a éviter ou garder 
    const ingredientChoix = (ingredient, choix) => {
        if (choix === "Garder") {
            setIngredientGarder((prev) => [...prev, ingredient]);
            setIngredientEviter((prev) => prev.filter(item => item.name !== ingredient.name));
        } else if (choix === "Eviter") {
            setIngredientEviter((prev) => [...prev, ingredient]);
            setIngredientGarder((prev) => prev.filter(item => item.name !== ingredient.name));
        }
    };

    // sa permet de selectionner uniquement les ingredient dans le tableau 
    const toutIngredients = data.flatMap(recipe => recipe.ingredients);

    // permet que chaque ingredient sois unique pas de doubon 
    const ingredientUnique = new Set();

    const filtreIngredients = [];


    // En gros va vérifier chaque ingredient est unique et l'injecter dans "filtreingredients" si il est unqiue si il ne l'est pas il va le recaler
    toutIngredients.forEach(ingredient => {
        if (!ingredientUnique.has(ingredient.name) && ingredient.name.toLowerCase().includes(saisie.toLowerCase())) {
            filtreIngredients.push(ingredient);
            ingredientUnique.add(ingredient.name);
        }
    });

// Travail de julie 
    function RecipeCard(props) {
        return (
            <div className="RecipeResults-card">
                <img src={props.url} className="RecipeResults-card-img" alt={props.title} />
                <div className="RecipeResults-card-info">
                    <div className="RecipeResults-card-title">{props.title}</div>
                    <div className="RecipeResults-card-preparation">{props.preparation_time}</div>
                </div>
            </div>
        );
    }

    function RecipeResults({ recipe }) {
        return (
            <div className="RecipeResults">
                <RecipeCard
                    key={recipe.id}
                    url={recipe.url}
                    title={recipe.title}
                    preparation_time={recipe.preparation_time}
                    tags={recipe.tags}
                />
            </div>
        );
    }

    // ce qui aparait a l'ecran 
    return (
        <div className="encadrementIngredientInput">
            <div className='encadrementRecherche'>
                {/* Image de la mascotte  */}
                <img className='biscottineMascotteInput' src={mascotteBiscottine} alt='' />
                {/* Image du logo  */}
                <img className='titreLogoInput' src={logoInputIngredient} alt='' />
                {/* Texte entredessous du Logo  */}
                <p className='texteSousLogoInput'>Trouve-moi <br /> une recette !</p>

                <div className="tagFilter">
                    <p>Filtrer par tags </p>
                    <div className="tagFilterButtons">
                        {/* parcourt tous les tag  */}
                        {toutLesTags.map((tag, index) => (
                            <button
                                key={index}
                                // Key permet que chaque Tag sois identifié
                                className={selectedTags.includes(tag) ? 'tagButton active' : 'tagButton'}
                                onClick={() => affichageTag(tag)}
                            > {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <p>choisis tes ingredient</p>
                {/* input pour la saisie utilisateur  */}
                <input className="ingredientInput"
                    value={saisie}
                    onChange={rechercheChangement}
                    type="text"
                    placeHolder="Recherche d'ingredients" />

                {/* resultat recherche  */}
                {saisie !== '' && (
                    <div className="alignementInputRecherche">
                        {filtreIngredients.map((ingredient) => (
                            <div className="placementInputIngredient">

                                <ul className='inputIngredientName'>
                                    {/* ce qui aparait dans la barre de recherche  */}
                                    <li className='ingredientRechercheInput'>{ingredient.name}</li>
                                </ul>
                                {/* button garder  */}
                                <button
                                    className='buttonGarder'
                                    onClick={() => ingredientChoix(ingredient, "Garder")}
                                    disabled={ingredientGarder.some(item => item.name === ingredient.name)}
                                // le disabled dit si l'ingredient est garder tu ne pourras pas reclicker dessus 
                                // some renverras true si item.name est strictement egal a ingredient.name 
                                > + </button>

                                {/* button  eviter  */}
                                <button
                                    className='buttonEviter'
                                    onClick={() => ingredientChoix(ingredient, "Eviter")}
                                    disabled={ingredientEviter.some(item => item.name === ingredient.name)}
                                > - </button>
                            </div>
                        ))}
                    </div>
                )}
                {/* ingredient a gardé  */}
                <div>
                    <p className='textIngredientSelect'>Ingrédients gardés</p>
                    <div className='encradrementGarderIngredient'>
                        {ingredientGarder.map((ingredient, index) => (
                            <div className='ingredientSelectionnerGarder' key={index}>
                                <div className='cadreIngredientSelectioner'>
                                    <button className='buttonSuprimer' onClick={() => suprimerDeGarder(ingredient)}>
                                        X</button>
                                    <img src={ingredient.url1}
                                        alt=''
                                        className="choixIngredientImage" />
                                    <p className='textIngredientSousImg'>{ingredient.name} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* ingredient a évité  */}
                    <p className='textIngredientSelect' >Ingrédients évités</p>
                    <div className='encradrementGarderIngredient'>
                        {ingredientEviter.map((ingredient, index) => (
                            <div className='ingredientSelectionnerGarder' key={index}>
                                <div className='cadreIngredientSelectioner'>
                                    <button className='buttonSuprimer' onClick={() => suprimerDeEviter(ingredient)}>
                                        X</button>
                                    <img src={ingredient.url1}
                                        alt=''
                                        className="choixIngredientEviterImage" />
                                    <p className='textIngredientSousImg'>{ingredient.name} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* la zone interessante Pour ton image */}
            {filteredRecipes.length > 0 ? (
                <div className="resultatRecherchePlat">
                    {filteredRecipes.map((recipe, index) => (
                        <RecipeResults key={index} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <p>Aucune recette à votre goût ? Hmm... vous aimez sans doute la simplicité.</p>
            )}
        </div>
    )
};
export default IngredientInput;