export class Tag {
  constructor(dropdownID, title) {
    this.dropdownID = dropdownID;
    this.title = title;
  }

  /**
   * Création des élements dom pour un tag
   */
  setTagDomElts = () => {
    const container = document.querySelector(".badge_container");

    let html = `<div class="badge color-${this.dropdownID} d-flex align-items-center justify-content-center" data-id=${this.dropdownID}
      ><span class="badge-text">${this.title}</span> <i class="far fa-times-circle ml-2"></i
    ></div>`;

    container.insertAdjacentHTML("beforeend", html);
  };
}
