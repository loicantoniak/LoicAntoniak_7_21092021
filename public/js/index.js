"use strict";

import { recipes } from "./data/recipes.js";
import { Recipe } from "./class/RecipeClass.js";

/**
 * Create a list of recipes
 * @param {array} recipes
 */
const recipesList = (recipes) => {
  recipes.forEach((recipe) => {
    new Recipe(
      recipe.id,
      recipe.name,
      recipe.servings,
      recipe.ingredients,
      recipe.time,
      recipe.description,
      recipe.appliance,
      recipe.ustensils
    ).setRecipeDomElts();
  });
};

recipesList(recipes);
