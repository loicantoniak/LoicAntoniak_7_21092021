import { deleteElements } from "./lib/functions.js";

export default function deleteOldElements() {
  const recipesContainer = document.querySelector("#main");
  const badgeContainer = document.querySelector(".badge_container");
  const dropdownList = document.querySelectorAll("nav");
  const menus = document.querySelectorAll(".dropdown-menu ");
  deleteElements(badgeContainer);
  dropdownList.forEach((dropdown) => {
    deleteElements(dropdown);
  });
  menus.forEach((menu) => {
    deleteElements(menu);
  });
  deleteElements(recipesContainer);
}
