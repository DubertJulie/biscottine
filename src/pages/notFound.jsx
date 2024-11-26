import '../App.css';
import SavedRecipes from '../components/SavedRecipes.js'
import Header from '../components/Header.js'
import ErrorNotFound from '../components/ErrorNotFound.js'
import erreur from '../assets/erreur.png';

export default function notFound() {
    return (
        <>
            <Header />
            <ErrorNotFound />
        </>
    );
}