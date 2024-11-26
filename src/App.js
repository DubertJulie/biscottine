import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Favorites from "./pages/favorites";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

    <div>
      <Header />
      <IngredientInput />
    </div>
  );
}

export default App;


