const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original/"

class MovieItem extends HTMLElement {

    connectedCallback() {
        this.classList.add("col-2");
        this.addEventListener('click', this.handleClick, true)    ;
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    handleClick(ev) {
        console.log(this._movie)
    }

    render() {
        this.innerHTML = `
        <div class="card card-block">
            <img class="card-img-top poster" src="${BASE_URL_IMAGE+this._movie.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this._movie.title}</h5>
            </div>
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);