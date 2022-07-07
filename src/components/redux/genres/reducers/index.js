import { SET_GENRE_DATA } from "../actions";

export function setGenreData(state = [], action) {
  switch (action.type) {
    case SET_GENRE_DATA:
      return [...state, action.genreData];
    default:
      return state;
  }
}
