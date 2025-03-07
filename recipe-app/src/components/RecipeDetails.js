import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data/recipes";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="page">
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <Link to="/" className="back-button">⬅ Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
