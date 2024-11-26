import './header.css';
import LogoHeader from '../assets/logo.png';
import mascotteHeader from '../assets/mascotte.png';
import { Link } from "react-router-dom";


function Header() {

    return (

        <header className='encadrementHeader'>
            <div className='encadrementTete'>
                <div>
                <Link to="/"><img className='mascotteHeader' src={mascotteHeader} alt='' /></Link>
                <Link to="/"><img className='logoHeader' src={LogoHeader} alt='' /></Link>
                </div>
                
                <div className='headerlist'>
                    <Link to="/">Toutes les recettes</Link>
                    <Link to="/favorites">Mes recettes ♥</Link>
                </div>

            </div>
        </header>

    )
};


export default Header;