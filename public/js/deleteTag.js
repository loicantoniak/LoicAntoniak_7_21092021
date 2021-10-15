import { tags } from "./lib/constants.js";
import { recipes as allRecipes } from "./data/recipes.js";
import { newRecipes as data, updateRecipes } from "./index.js";
import mainSearch from "./mainSearch.js";

export default function deleteTag() {
  const tagsList = document.querySelectorAll(".badge");
  const input = document.querySelector(".main-search");

  tagsList.forEach((tag) => {
    const closeBtn = tag.querySelector(".fa-times-circle");
    const text = tag.querySelector(".badge-text").innerHTML;

    closeBtn.addEventListener("click", function () {
      const index = tags.findIndex((tag) => tag.name === text);

      if (index > -1) {
        tags.splice(index, 1);
      }

      const newRecipes = mainSearch(allRecipes, input.value);

      data.splice(0, data.length);
      data.push(...newRecipes);
    
      updateRecipes(data)

    });
  });
}
