import filteringByTag from "./filteringByTag.js";
import { dropdownList as dropdownData, tags } from "./lib/constants.js";
import { deleteElements } from "./lib/functions.js";

let items = [];

export default function search(recipes) {
  const dropdownList = document.querySelectorAll(".dropdown-container");

  dropdownList.forEach((dropdown) => {
    const input = dropdown.querySelector("input");
    const dropdownClose = dropdown.querySelector(".dropdown-close");

    const id = dropdown.getAttribute("id");

    input.addEventListener("keyup", function () {
      deleteElements(dropdownClose);
      let value = input.value;
      if (value.length > 2) {
        items = dropdownData
          .find((dropdown) => dropdown.id === id)
          .items.filter((i) => i.toLowerCase().includes(value.toLowerCase()));
      } else {
        items = [];
      }

      /**
       * Si on trouve une correpondance, on affiche la liste d'items
       */
      if (items.length > 0) {
        let html = "";
        items.forEach((item) => {
          html += `<li class="dropdown-item">${item}</li>`;
        });

        dropdownClose.insertAdjacentHTML("beforeend", html);
      }

      /**
       * On récupère le dom de la liste d'items et on ajoute l'event click pour ajouter un tag
       */
      const dropdownList = dropdownClose.querySelectorAll(".dropdown-item");

      dropdownList.forEach((item) => {
        const content = item.innerHTML;
        item.addEventListener("click", function () {
          const newTag = { id: id, name: content };
          tags.push(newTag);
          filteringByTag(recipes, tags);
        });
      });
    });
  });
}
