import './movie-detail';
import DefaultImage from '../../images/picture.png';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/original/';

class MovieItem extends HTMLElement {
    static modalElement = null;

    connectedCallback() {
      this.classList.add('col-2');
      this.addEventListener('click', this.handleClick);
    }

    set movie(movie) {
      this._movie = movie;
      this.render();
    }

    handleClick() {
      MovieItem.modalElement.obj.movie = this._movie;
      MovieItem.modalElement.modalBoot.show();
    }

    render() {
      this.innerHTML = '';

      const containerCard = document.createElement('div');
      containerCard.classList.add('card');
      containerCard.classList.add('card-block');

      const poster = document.createElement('img');
      poster.classList.add('card-img-top');
      poster.classList.add('poster');
      poster.src = DefaultImage;
      const newImage = new Image();
      newImage.onload = () => {
        poster.src = BASE_URL_IMAGE + this._movie.poster_path;
      };
      newImage.src = BASE_URL_IMAGE + this._movie.poster_path;
      containerCard.appendChild(poster);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.innerText = this._movie.title;
      cardBody.appendChild(title);

      containerCard.appendChild(cardBody);

      this.appendChild(containerCard);
    }
}

customElements.define('movie-item', MovieItem);
export default MovieItem;
