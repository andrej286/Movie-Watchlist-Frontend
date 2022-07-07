import { combineReducers} from "redux";
import {setMovieData} from "./movies/reducers";
import {setGenreData} from "./genres/reducers";
import {setReviewData} from "./reviews/reducers";

// export default combineReducers({
//   replaceMe: () => 'replace me'
// });

export const movieReducer = combineReducers({
  movieData: setMovieData,
  genreData: setGenreData,
  reviewData: setReviewData,
});