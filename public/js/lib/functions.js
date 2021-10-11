/**
 * Supprime les enfants d'un élément donné
 * @param {node} element
 * @returns
 */
export function deleteElements(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

/**
 * Recherche les recettes d'un ingrédient donné
 * @param {array} recipes
 * @param {string} ingredient
 * @returns
 */
export function getRecipesByIngredient(recipes, ingredient) {
  let list = [];
  recipes.forEach((recipe) => {
    recipe.ingredients.filter((j) =>
      j.ingredient.toLowerCase().includes(ingredient.toLowerCase())
    ).length > 0 && list.push(recipe);
  });
  return list;
}

/**
 * Recherche les recettes d'un appareil donné
 * @param {array} recipes
 * @param {string} appliance
 * @returns
 */
export function getRecipesByAppliance(recipes, appliance) {
  return recipes.filter(
    (recipe) => recipe.appliance.toLowerCase() === appliance
  );
}

/**
 * Recherche les recettes d'un ustensile donné
 * @param {array} recipes
 * @param {string} ustensil
 * @returns
 */
export function getRecipesByUstensil(recipes, ustensil) {
  return recipes.filter((recipe) => recipe.ustensils.includes(ustensil));
}

/**
 * Recherche les recettes par rapport à un mot ou groupe de mots
 * @param {array} recipes
 * @param {string} string
 * @returns {array}
 */
export function getResearch(recipes, string) {
  let newRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    if (
      researchName(recipes[i], string) ||
      researchDescription(recipes[i], string) ||
      researchIngredient(recipes[i], string)
    ) {
      newRecipes.push(recipes[i]);
    }
  }
  return newRecipes;
}

function researchName(recipe, name) {
  if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
    return recipe;
  }
}

function researchDescription(recipe, name) {
  if (recipe.description.toLowerCase().includes(name.toLowerCase())) {
    return recipe;
  }
}

function researchIngredient(recipe, name) {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    if (
      recipe.ingredients[i].ingredient
        .toLowerCase()
        .includes(name.toLowerCase())
    ) {
      return recipe;
    }
  }
}

/**
 * Recherche les recettes par tags présents
 * @param {array} recipes
 * @param {array} tags
 * @param {array} allRecipes
 * @returns
 */
export function getSearchByTag(recipes, tags, allRecipes) {
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

  return newRecipes;
}
