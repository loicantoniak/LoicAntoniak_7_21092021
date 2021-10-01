export default function customDropdown() {
  const dropdownList = document.querySelectorAll(".dropdown-container");

  dropdownList.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const input = dropdown.querySelector("input");
    const menu = dropdown.querySelector(".dropdown-menu");
    const placeholder = input.getAttribute("placeholder");
    const expandPlaceholder = input.getAttribute("data-expand-placeholder");

    let width = "170px";

    button.addEventListener("click", function () {
      if (!dropdown.classList.contains("show")) {
        button.classList.add("dropdown-toggle-open");
        dropdown.style.width = "667px";
        menu.style.width = "667px";
      } else {
        button.classList.remove("dropdown-toggle-open");
        dropdown.style.width = "170px";
        menu.style.width = "170px";
      }
    });

    window.addEventListener("click", function (e) {
      if (input.contains(e.target)) {
        width = dropdown.classList.contains("show") ? "669px" : "270px";
        dropdown.style.width = width;

        menu.style.width = width;
        input.style.width = "230px";
        input.setAttribute("placeholder", `Rechercher un ${expandPlaceholder}`);
      } else {
        width = "170px";
        dropdown.style.width = width;
        menu.style.width = width;
        input.style.width = width;
        input.setAttribute("placeholder", `${placeholder}`);
      }
    });
  });
}
