import "../component/movie-list.js";
import "../component/movie-category.js";


class Category {
    
    constructor(categoryConfig) {
        this._elementCategory =  document.querySelector(categoryConfig.className);
        this._elementCategory.category = categoryConfig.title;
        this._dataSourceFunc = categoryConfig.dataSourceFunc;
    }

    getData = () => {
        this._dataSourceFunc()
            .then(this.render)
            .catch(this.renderError)
    }

    render = (movies) => {
        this._elementCategory.movieListElement.movies = movies;
    }

    renderError = (error) => {
        console.log(error);
    }
}


export default Category;