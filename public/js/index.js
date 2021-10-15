"use strict";

// Data
import { recipes as data } from "./data/recipes.js";
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

export let newRecipes = [...data];

updateRecipes(newRecipes);

export function updateRecipes(recipes) {
  deleteOldElements();
  getItems(recipes);
  getRecipesList(recipes);
  getDropdownList(dropdownList);
  customDropdown();
  search(recipes);
  getTags(recipes);
  getTagsList(tags);
  deleteTag(recipes);
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
