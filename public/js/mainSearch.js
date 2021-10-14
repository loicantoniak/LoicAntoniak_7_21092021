import { updateRecipes, newRecipes as data } from "./index.js";
import { recipes as allRecipes } from "./data/recipes.js";
import { getResearch, getSearchByTag } from "./lib/functions.js";
import { tags } from "./lib/constants.js";

const input = document.querySelector(".main-search");

input.addEventListener("input", function () {
  let value = input.value;
  mainSearch(allRecipes, value);
});

export default function mainSearch(recipes, value) {
  const message = document.querySelector(".noEntry");

  let newRecipes = getSearchByTag(recipes, tags, allRecipes);

  if (value.length > 2) {
    newRecipes = getResearch(newRecipes, value.toLowerCase());
  }

  newRecipes.length === 0
    ? (message.style.display = "block")
    : (message.style.display = "none");

  updateRecipes(newRecipes);
}
