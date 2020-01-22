import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndpoint = apiURL + "/movies";

function getMovieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(getMovieUrl(movieId));
}

export function getMovie(movieId) {
  return http.get(getMovieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(getMovieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}
