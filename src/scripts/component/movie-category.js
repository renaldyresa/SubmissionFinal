import "./movie-list.js";

class MovieCategory extends HTMLElement {

    constructor() {
        super();
        this.movieListElement = document.createElement("movie-list");
    }

    connectedCallback() {
        this.classList.add("container-fluid");
        this.render();
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    render() {
        this.innerHTML = `<h3>${this._category}</h3>` ;
        this.appendChild(this.movieListElement);
    }

}

customElements.define("movie-category", MovieCategory);