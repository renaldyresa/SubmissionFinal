import './movie-item';

class MovieSearch extends HTMLElement {
  constructor() {
    super();
    this._movies = [];
  }

  connectedCallback() {
    this.render();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  static createMovie(parent, movie) {
    const movieElement = document.createElement('movie-item');
    movieElement.movie = movie;
    parent.appendChild(movieElement);
  }

  static createRow(parent) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('g-4');
    row.classList.add('row-cols-6');
    parent.appendChild(row);
    return row;
  }

  render() {
    this.innerHTML = '';
    const row = MovieSearch.createRow(this);
    this._movies.forEach((movie) => {
      MovieSearch.createMovie(row, movie);
    });
  }
}

customElements.define('movie-search', MovieSearch);
