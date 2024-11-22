import logo from './logo.svg';
import './App.css';
import RecipeResults from './components/RecipeResults.js';
import RecipeDetails from './components/RecipeDetails.js';

function App() {
  return (
    <>
      <RecipeDetails />
      <RecipeResults />
    </>
  );
}

export default App;
