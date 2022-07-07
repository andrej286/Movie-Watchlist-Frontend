export const SET_MOVIE_DATA = "WL@SET_MOVIE_DATA";

export function setMovieData(movieData) {
  return {
    type: SET_MOVIE_DATA,
    movieData,
  };
}