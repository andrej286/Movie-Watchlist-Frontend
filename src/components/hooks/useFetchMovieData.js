import EShopService from "../../repository/emovieRepository";
import { setMovieData } from "../redux/movies/actions";
import { useDispatch } from "react-redux";
import { setGenreData } from "../redux/genres/actions";
import { useMemo, useState } from "react";
import { setReviewData } from "../redux/reviews/actions";

// TODO: 7/8/2022 fetch the data in a useMemo or useCallback hook to decrease re-renders.
//  Or remove useMemo if it causes problems in updating the data.
export const useFetchMovieData = () => {
  const dispatch = useDispatch();

  const [fetchingMovieStatus, setFetchingMovieStatus] = useState(false);
  const [fetchingGenreStatus, setFetchingGenreStatus] = useState(false);
  const [fetchingReviewStatus, setFetchingReviewStatus] = useState(false);

  useMemo(() => EShopService.fetchMovies()
    .then((data) => {
      dispatch(setMovieData(data.data));
    })
    .finally(() => setFetchingMovieStatus(true)), [dispatch]);

  useMemo(() =>EShopService.fetchGenres()
    .then((data) => {
      dispatch(setGenreData(data.data));
    })
    .finally(() => setFetchingGenreStatus(true)), [dispatch]);

  useMemo(() =>EShopService.fetchReviews()
    .then((data) => {
      dispatch(setReviewData(data.data));
    })
    .finally(() => setFetchingReviewStatus(true)), [dispatch]);

  return fetchingMovieStatus && fetchingGenreStatus && fetchingReviewStatus;
};

// EShopService.fetchMovies()
//   .then((data) => {
//     dispatch(setMovieData(data.data));
//   })
//   .finally(() => setFetchingMovieStatus(true));
//
// EShopService.fetchGenres()
//   .then((data) => {
//     dispatch(setGenreData(data.data));
//   })
//   .finally(() => setFetchingGenreStatus(true));
//
// EShopService.fetchReviews()
//   .then((data) => {
//     dispatch(setReviewData(data.data));
//   })
//   .finally(() => setFetchingReviewStatus(true));
/*
  useMemo(() => EShopService.fetchMovies()
    .then((data) => {
      dispatch(setMovieData(data.data));
    })
    .finally(() => setFetchingMovieStatus(true)), [dispatch]);

  useMemo(() =>EShopService.fetchGenres()
    .then((data) => {
      dispatch(setGenreData(data.data));
    })
    .finally(() => setFetchingGenreStatus(true)), [dispatch]);

  useMemo(() =>EShopService.fetchReviews()
    .then((data) => {
      dispatch(setReviewData(data.data));
    })
    .finally(() => setFetchingReviewStatus(true)), [dispatch]);
 */
//
// const useMemoPromise = useMemo(() => EShopService.fetchMovies()
//   .then((data) => {
//     dispatch(setMovieData(data.data));
//     console.log(' dispatch(setMovieData(data.data));');
//   })
//   .finally(() => setFetchingMovieStatus(true)), [dispatch]);
//
// console.log('useMemoPromise here: ',useMemoPromise)
//
// // EShopService.fetchGenres()
// //   .then((data) => {
// //     dispatch(setGenreData(data.data));
// //     console.log('dispatch(setGenreData(data.data));');
// //   })
// //   .finally(() => setFetchingGenreStatus(true));
//
//
// EShopService.fetchGenres()
//   .then((data) => {
//     dispatch(setGenreData(data.data));
//     console.log('dispatch(setGenreData(data.data));');
//     setFetchingGenreStatus(true);
//   });
//
// EShopService.fetchReviews()
//   .then((data) => {
//     dispatch(setReviewData(data.data));
//     console.log('dispatch(setReviewData(data.data)); and data here', data.data);
//   })
//   .finally(() => setFetchingReviewStatus(true));
