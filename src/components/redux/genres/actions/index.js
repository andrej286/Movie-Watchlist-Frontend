export const SET_GENRE_DATA = "WL@SET_GENRE_DATA";

export function setGenreData(genreData) {
  return {
    type: SET_GENRE_DATA,
    genreData,
  };
}
