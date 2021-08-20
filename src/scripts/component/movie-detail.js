import DefaultImage from '../../images/picture.png';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/original/';

class MovieDetail extends HTMLElement {
  constructor() {
    super();
    this._movie = {};
  }

  connectedCallback() {
    this.classList.add('modal');
    this.classList.add('fade');
    this.render();
  }

  set movie(movie) {
    if (movie != null) {
      this._movie = movie;
      this.render();
    }
  }

  render() {
    this.innerHTML = `
            <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${this._movie.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img class="poster-detail" src="${BASE_URL_IMAGE + this._movie.poster_path}" onerror="this.src='${DefaultImage}'">
                        Rating : ${this._movie.vote_average} <br>
                        Release Date : ${this._movie.release_date} <br>
                        <br>
                        ${this._movie.overview}
                    </div>
                </div>
            </div>
        `;

    const poster = this.querySelector('img');
    poster.src = './src/images/picture.png';
    const newImage = new Image();
    newImage.onload = () => {
      poster.src = BASE_URL_IMAGE + this._movie.poster_path;
    };
    newImage.src = BASE_URL_IMAGE + this._movie.poster_path;
  }
}

customElements.define('movie-detail', MovieDetail);
