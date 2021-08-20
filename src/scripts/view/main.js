import bootstrap from 'bootstrap/dist/js/bootstrap';
import DataSource from '../resource/data-source';
import Category from './category';
import MovieItem from '../component/movie-item';
import '../component/movie-search';

const main = () => {
  const movieDetail = document.querySelector('movie-detail');
  MovieItem.modalElement = {
    obj: movieDetail,
    modalBoot: new bootstrap.Modal(movieDetail),
  };

  const popularMovies = new Category({
    className: '.popular',
    title: 'Popular',
    dataSourceFunc: DataSource.popularMovies,
  });
  popularMovies.getData();

  const nowPlayingMovies = new Category({
    className: '.now-playing',
    title: 'Now Playing',
    dataSourceFunc: DataSource.nowPlayingMovies,
  });
  nowPlayingMovies.getData();

  const topRated = new Category({
    className: '.top-rated',
    title: 'Top Rated',
    dataSourceFunc: DataSource.topRatedMovies,
  });
  topRated.getData();

  const moviesCategory = document.getElementById('movies-category');
  const movieSearch = document.querySelector('movie-search');
  const searchForm = document.getElementById('search-form');
  const messageElement = document.getElementById('message');
  messageElement.style.display = 'none';

  searchForm.addEventListener('submit', () => {
    const text = searchForm.elements.namedItem('search').value;
    if (text === '') {
      movieSearch.style.display = 'none';
      moviesCategory.style.display = 'block';
      messageElement.style.display = 'none';
    } else {
      movieSearch.style.display = 'block';
      DataSource.searchMovie(text)
        .then((movies) => {
          if (movies.length !== 0) {
            movieSearch.movies = movies;
          } else {
            messageElement.style.display = 'block';
            messageElement.innerText = 'No Movie Found';
          }
        }).catch((error) => {
          messageElement.style.display = 'block';
          messageElement.innerText = error;
        });
      moviesCategory.style.display = 'none';
    }
  });
};

export default main;
