import { updateRecipes } from "./index.js";
import { recipes as allRecipes } from "./data/recipes.js";
import { getRecipesByAppliance, getRecipesByIngredient, getRecipesByUstensil } from "./lib/functions.js";

/**
 * Filtre les recettes par rapport aux tags
 * @param {array} tags
 */
export default function filteringByTag(recipes, tags) {
  let newRecipes = [];

  if (tags.length === 0) {
    newRecipes = allRecipes;
  }

  tags.forEach((tag) => {
    switch (tag.id) {
      case "ingredient":
        newRecipes = getRecipesByIngredient(recipes, tag.name);
        break;
      case "appliance":
        newRecipes = getRecipesByAppliance(recipes, tag.name);
        break;
      case "ustensil":
        newRecipes = getRecipesByUstensil(recipes, tag.name);
        break;
      default:
        newRecipes = [];
        break;
    }
  });
  updateRecipes(newRecipes);
}

