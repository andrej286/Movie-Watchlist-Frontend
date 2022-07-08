import { SET_MOVIE_DATA } from "../actions";

export function setMovieData(state = [], action) {
  switch (action.type) {
    case SET_MOVIE_DATA:
      return action.movieData;
    default:
      return state;
  }
}

//
// export function setMovieData(state = [], action) {
//   switch (action.type) {
//     case SET_MOVIE_DATA:
//       return [...state, action.movieData];
//     default:
//       return state;
//   }
// }

// function setMovieData(state, action) {
//   return {
//     ...state,
//     ...(action.movieData ?? {})
//   };
// }
