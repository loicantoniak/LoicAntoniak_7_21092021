import { updateRecipes, newRecipes as data } from "./index.js";
import { getSearchByTag } from "./lib/functions.js";

/**
 * Filtre les recettes par rapport aux tags
 * @param {array} tags
 */
export default function filteringByTag(recipes, tags) {
  let newRecipes = getSearchByTag(recipes, tags);

  data.splice(0, data.length);
  data.push(...newRecipes);

  updateRecipes(data);
}
