import './ErrorNotFound.css'
import erreur from '../assets/erreur.png';

export default function ErrorNotFound() {
    return (
        <div className="notfound-container">
            <img src={erreur} />
            <h2>Faites demi-tour, il n'y a rien ici.</h2>
        </div>
    )
}