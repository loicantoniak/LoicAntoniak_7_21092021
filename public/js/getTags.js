import filteringByTag from "./filteringByTag.js";
import { tags } from "./lib/constants.js";


/**
 *  Ajout l'élément sélectionné à la liste des tags
 */
export default function getTags(recipes) {
  const dropdownList = document.querySelectorAll(".dropdown-container");
  dropdownList.forEach((dropdown) => {
    const itemsList = dropdown.querySelectorAll(".dropdown-item");
    const id = dropdown.getAttribute("id");
    itemsList.forEach((item) => {
      const content = item.innerHTML;
      item.addEventListener("click", function () {
        const newTag = { id: id, name: content };
        tags.push(newTag);
        // filteringByTag(recipes, newTag);
        filteringByTag(recipes, tags);
      });
    });
  });
}

// supprimer le tag dont le nom est égal au contenu du text du badge cliqué
