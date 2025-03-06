import React from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";

const Home = () => {
  return (
    <div className="page">
      <h1>🍽 Recipe List</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="recipe-link">
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
