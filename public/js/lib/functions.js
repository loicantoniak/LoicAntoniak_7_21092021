export default function randomId() {
  return Math.random().toString(36).substring(7);
}

export function deleteElements(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

/**
 *
 * @param {array} recipes
 * @param {string} ingredient
 * @returns
 */
 export function getRecipesByIngredient(recipes, ingredient) {
  let list = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.filter((j) => j.ingredient === ingredient).length > 0 &&
      list.push(recipe);
  });
  return list;
}

/**
 *
 * @param {array} recipes
 * @param {string} appliance
 * @returns
 */
export function getRecipesByAppliance(recipes, appliance) {
  return recipes.filter((recipe) => recipe.appliance === appliance);
}

/**
 *
 * @param {array} recipes
 * @param {string} ustensil
 * @returns
 */
export function getRecipesByUstensil(recipes, ustensil) {
  return recipes.filter((recipe) => recipe.ustensils.includes(ustensil));
}