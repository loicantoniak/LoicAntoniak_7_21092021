import { updateRecipes } from "./index.js";

/**
 * Filtre les recettes par rapport aux tags
 * @param {array} tags
 */
export default function filteringByTag(recipes, tags) {
  let newRecipes = [];

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
  updateRecipes(newRecipes, tags);
}

/**
 *
 * @param {array} recipes
 * @param {string} ingredient
 * @returns
 */
function getRecipesByIngredient(recipes, ingredient) {
  let list = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.filter((j) => j.ingredient === ingredient).length > 0 &&
      list.push(recipe);
  });
  return list;
}

function getRecipesByAppliance(recipes, appliance) {
  return recipes.filter((recipe) => recipe.appliance === appliance);
}

function getRecipesByUstensil(recipes, ustensil) {
  return recipes.filter((recipe) => recipe.ustensils.includes(ustensil));
}
