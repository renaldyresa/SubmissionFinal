const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7e8a801fb5a9149e21ee7edb2d6c4bca';

const request = (url, param = {}) => {
  const params = {
    api_key: API_KEY,
    ...param,
  };
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => Promise.resolve(responseJson.results))
    .catch((error) => Promise.reject(error));
};

class DataSource {
  static popularMovies() {
    const url = new URL(`${BASE_URL}movie/popular`);
    return request(url);
  }

  static nowPlayingMovies() {
    const url = new URL(`${BASE_URL}movie/now_playing`);
    return request(url);
  }

  static topRatedMovies() {
    const url = new URL(`${BASE_URL}movie/top_rated`);
    return request(url);
  }

  static searchMovie(query) {
    const url = new URL(`${BASE_URL}search/movie`);
    return request(url, { query });
  }
}

export default DataSource;
