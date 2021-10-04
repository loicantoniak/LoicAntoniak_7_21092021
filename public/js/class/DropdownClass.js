export class Dropdown {
  constructor(id, placeholder, expand, items) {
    this.id = id;
    this.placeholder = placeholder;
    this.expand = expand;
    this.items = items;
  }

  /**
   * Création des élements dom pour un dropdown
   */
  setDropdownDomElts = () => {
    const nav = document.querySelector("nav");

    let html = `
    <div class="btn-group color-${this.id} dropdown-container mr-3" id=${this.id}>
        <div class="form-group m-0">
          <input type="text" class="form-control" id=${this.id} placeholder=${this.placeholder} data-expand-placeholder=${this.expand}>
        </div>
        <button
          type="button"
          class="btn dropdown-toggle dropdown-toggle-split color-${this.id}"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">${this.id} Dropdown</span>
        </button>
        <ul class="dropdown-menu color-${this.id}">`;

    for (let i = 0; i < 30; i++) {
      if (this.items[i] !== undefined) {
        html += `<li class="dropdown-item">${this.items[i]}</li>`;
      }
    }

    // {
    //   this.items.forEach((item) => {
    //     html += `<li class="dropdown-item">${item}</li>`;
    //   });
    // }

    html += `
        </ul>
        <ul class="dropdown-menu dropdown-close color-${this.id}"></ul>
        </div>`;

    nav.insertAdjacentHTML("beforeend", html);
  };
}
