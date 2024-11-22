import './IngredientInput.css';
import mascotteBiscottine from '../assets/mascotte.png'
import logoInputIngredient from '../assets/logo.png'



function ingredientInput() {

    return (

        <div className="encadrementIngredientInput">


            {/* Image de la mascotte  */}
            <img className='biscottineMascotteInput' src={mascotteBiscottine} alt='' />
            {/* Image logo  */}
            <img className='titreLogoInput' src={logoInputIngredient} alt='' />
            {/* Texte entredessous du Logo  */}
            <p className='texteSousLogoInput'>Trouve-moi <br /> une recette !</p>

            <p></p>
            <p></p>
            <input className="ingredientInput" type="text" placeHolder=" Yes" />



        </div>

    )
};


export default ingredientInput;