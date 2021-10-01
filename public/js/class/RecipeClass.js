export class Recipe {
  constructor(
    id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils
  ) {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }

  /**
   * Création les élements Dom pour une recette
   */
  setRecipeDomElts = () => {
    const recipesContainer = document.querySelector("#main");

    let html = `
     <figure class="card">
        <div class="card-img-top"></div>
        <figcaption class="card-body">
          <header
            class="d-flex justify-content-between align-items-start mb-4"
          >
            <h2>${this.name}</h2>
            <div class="d-flex justify-content-between align-items-center">
              <span class="far fa-clock fa-lg mr-2"></span>
              <h3>${this.time} min</h3>
            </div>
          </header>
          <main class="d-flex justify-content-between">
            <div class="ingredients">`;

    this.ingredients.forEach((ingredient) => {
      html += ` <p class="body-extra-small m-0">${ingredient.ingredient}${
        ingredient.quantity !== undefined || ingredient.unit !== undefined
          ? " :"
          : ""
      } <span>${ingredient.quantity !== undefined ? ingredient.quantity : ""} ${
        ingredient.unit !== undefined ? ingredient.unit : ""
      }</span></p>`;
    });

    html += `</div>
             <p class="description font-text">${this.description}</p>
           </main>
         </figcaption>
       </figure>`;

    recipesContainer.insertAdjacentHTML("beforeend", html);
  };
}
