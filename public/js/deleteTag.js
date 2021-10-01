import filteringByTag from "./filteringByTag.js";
import { tags } from "./lib/constants.js";
import { recipes } from "./data/recipes.js";

export default function deleteTag() {
  const tagsList = document.querySelectorAll(".badge");

  tagsList.forEach((tag) => {
    const closeBtn = tag.querySelector(".fa-times-circle");
    const text = tag.querySelector(".badge-text").innerHTML;

    closeBtn.addEventListener("click", function () {
      const index = tags.findIndex((tag) => tag.name === text);

      if (index > -1) {
        tags.splice(index, 1);
      }

      filteringByTag(recipes, tags);
    });
  });
}
