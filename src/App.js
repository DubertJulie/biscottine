import logo from './logo.svg';
import './App.css';
import RecipeResults from './components/RecipeResults.js';
import RecipeDetails from './components/RecipeDetails.js';
import SavedRecipes from './components/SavedRecipes.js';

function App() {
  return (
    <>
      <RecipeDetails />
      <RecipeResults />
      <SavedRecipes />
    </>
  );
}

export default App;
