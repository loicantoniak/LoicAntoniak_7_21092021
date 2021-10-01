import { dropdownList } from "./lib/constants.js";
import { tags } from "./lib/constants.js";

/**
 * Ajoute les items par type de recherche dans la data des dropdowns
 * @param {array} recipes
 */
export default function getItems(recipes) {
  const tagsName = tags.map((tag) => tag.name);

  dropdownList.forEach((dropdown) => {
    switch (dropdown.id) {
      case "ingredient":
        dropdown.items = getIngredientsList(recipes, tagsName);
        break;
      case "appliance":
        dropdown.items = getApplicanceList(recipes, tagsName);
        break;
      case "ustensil":
        dropdown.items = getUStensilesList(recipes, tagsName);
        break;
      default:
        dropdown.items = [];
        break;
    }
  });
}

function getIngredientsList(recipes, tagsName) {
  let list = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.map((r) => list.push(r.ingredient));
  });
  const uniqueList = [...new Set(list)];
  const ingredientsList = uniqueList.filter((item) => !tagsName.includes(item));

  return ingredientsList;
}

function getApplicanceList(recipes, tagsName) {
  let list = [];
  recipes.forEach((recipe) => {
    list.push(recipe.appliance);
  });

  const uniqueList = [...new Set(list)];
  const appliancesList = uniqueList.filter((item) => !tagsName.includes(item));

  return appliancesList;
}

function getUStensilesList(recipes, tagsName) {
  let list = [];
  recipes.forEach((recipe) => {
    recipe.ustensils.map((u) => list.push(u));
  });

  const uniqueList = [...new Set(list)];
  const ustensilsList = uniqueList.filter((item) => !tagsName.includes(item));

  return ustensilsList;
}
