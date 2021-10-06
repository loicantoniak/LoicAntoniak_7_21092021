import { updateRecipes } from "./index.js";

export default function mainSearch(recipes) {
    let newRecipes = [];
  const search = document.querySelector(".principal-search");
  const input = search.querySelector("input");

  input.addEventListener("keyup", function () {
    let value = input.value;

    if (value.length > 2) {
    //    const r = recipes.forEach(recipe => {
    //         recipe.ingredients.map((ingredient) => ingredient.ingredient === "Lait")
    //     });

    //     console.log(r)
    } 



    // updateRecipes(newRecipes)
  });
}
