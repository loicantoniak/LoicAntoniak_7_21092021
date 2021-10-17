import { updateRecipes, newRecipes as currentRecipes } from "./index.js";
import { getResearch, getSearchByTag } from "./lib/functions.js";
import { tags } from "./lib/constants.js";

const input = document.querySelector(".main-search");

input.addEventListener("input", function () {
  let value = input.value.toLowerCase();
  if (value.length === 0 || value.length > 2) {
    const newRecipes = mainSearch(currentRecipes, value);
    updateRecipes(newRecipes);
  }
});

export default function mainSearch(recipes, value) {
  const message = document.querySelector(".noEntry");

  let newRecipes = getSearchByTag(recipes, tags);

  if (value.length > 2) {
    newRecipes = getResearch(newRecipes, value);
  }

  newRecipes.length === 0
    ? (message.style.display = "block")
    : (message.style.display = "none");

  return newRecipes;
}
