"use strict";

// Data
import { recipes } from "./data/recipes.js";
// Class
import { Recipe } from "./class/RecipeClass.js";
import { Dropdown } from "./class/DropdownClass.js";
import { Tag } from "./class/TagClass.js";

import { dropdownList, tags } from "./lib/constants.js";
import getItems from "./geItems.js";
import customDropdown from "./customDropdown.js";
import getTags from "./getTags.js";
import deleteOldElements from "./deleteOldElements.js";
import deleteTag from "./deleteTag.js";
import search from "./search.js";
import mainSearch from "./mainSearch.js";


updateRecipes(recipes);

export function updateRecipes(recipes) {
  deleteOldElements();
  getItems(recipes);
  getRecipesList(recipes);
  getDropdownList(dropdownList);
  customDropdown();
  mainSearch(recipes);
  search(recipes)
  getTags(recipes);
  getTagsList(tags);
  deleteTag();
}

/**
 * Créer l'ensemble des cartes recettes pour les recettes sélectionnées
 * @param {array} recipes
 */
function getRecipesList(recipes) {
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
}

/**
 * Créer l'ensemble des dropdown voulus
 * @param {array} searchList
 */
function getDropdownList(searchList) {
  searchList.forEach((item) => {
    new Dropdown(
      item.id,
      item.placeholder,
      item.expand,
      item.items
    ).setDropdownDomElts();
  });
}

function getTagsList(tags) {
  tags.forEach((tag) => {
    new Tag(tag.id, tag.name).setTagDomElts();
  });
}
