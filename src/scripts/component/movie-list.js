import "./movie-item.js" ;

class MovieList extends HTMLElement {

    connectedCallback() {
        const classes = ["scrolling-wrapper", "row", "flex-row", "flex-nowrap", "overflow-auto", "container-cards"];
        classes.forEach(cls => {
            this.classList.add(cls);
        });
    }
    
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._movies.forEach(movie => {
            const movieElement = document.createElement("movie-item");
            movieElement.movie = movie;
            this.appendChild(movieElement);
        });
    }

}


customElements.define("movie-list",  MovieList);