import '../component/movie-list';
import '../component/movie-category';

class Category {
  constructor(categoryConfig) {
    this._elementCategory = document.querySelector(categoryConfig.className);
    this._elementCategory.category = categoryConfig.title;
    this._dataSourceFunc = categoryConfig.dataSourceFunc;
  }

    getData = () => {
      this._dataSourceFunc()
        .then(this.render)
        .catch(this.renderError);
    }

    hide() {
      this._elementCategory.style.display = 'none';
    }

    render = (movies) => {
      this._elementCategory.movieListElement.movies = movies;
    }

    renderError = (error) => {
      const messageElement = document.getElementById('message');
      messageElement.style.display = 'block';
      messageElement.innerText = error;
    }
}

export default Category;
