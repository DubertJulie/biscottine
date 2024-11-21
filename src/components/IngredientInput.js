
import './IngredientInput.css';
import mascotteBiscottine from '../assets/mascotte.png'
import LogoInputIngredient from '../assets/logo.png'


function ingredientInput() {


    return (

        <div className="encadrementIngredientInput">

            
{/* Image de la mascotte  */}
                <img className='biscottineMascotteInput' src={mascotteBiscottine} alt='' />
               {/* Image logo  */}
                <img className='titreLogoInput' src={LogoInputIngredient} alt='' />
            {/* Texte entredessous du Logo  */}
                <p className='texteSousLogoInput'>Trouve-moi <br/> une recette !</p>
           
            <p></p>
            <p></p>
            <input className="ingredientInput" type="text" placeHolder=" Yes" />



        </div>

    )
};


export default ingredientInput;