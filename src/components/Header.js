
import './header.css';

// Ajout logo et Mascotte 
import LogoHeader from '../assets/logo.png';
import mascotteHeader from '../assets/mascotte.png';





function Header() {

    return (

        // Comencement du Header 
        <headers className='encadrementHeader'>
            <div className='encadrementTete'>
                <img className='mascotteHeader' src={mascotteHeader} alt='' />
                <img className='logoHeader' src={LogoHeader} alt='' />
                <ul className='headerlist'>

                    {/* Lien a ajouter  */}
                    <a className='hedearRecette' href="##">
                        <ol >Toute les recettes</ol></a>
                    {/* Lien a mettre  */}
                    <a className='headerFavoris' href="##"><ol >Mes recettes ♥</ol></a>


                </ul>

            </div>
        </headers>

    )
};


export default Header;