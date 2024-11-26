import React from "react";
import RecipeDetails from '../components/RecipeDetails'
import { useParams } from "react-router-dom";
import Header from '../components/Header'
import data from '../data/recipes.json';


export default function RecipeDetailsPage() {
  const { id } = useParams(); // Récupère le paramètre dynamique "id" de l'URL

  return (
    <>
      <Header />
      <RecipeDetails id={id} />
      </>
  );
}