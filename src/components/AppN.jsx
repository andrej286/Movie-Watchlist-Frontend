
import * as React from 'react'
import EShopService from "../repository/emovieRepository";
import Header from "./Header/header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Movies from "./Movies/MoviesList/movies";
import MovieAdd from "./Movies/MovieAdd/movieAdd";
import MovieEdit from "./Movies/MovieEdit/movieEdit";
import MovieReview from "./Movies/MovieReview/movieReview";
import {ReviewCardStyled} from "./styles/ReviewCard.styled";
import Watchlist from "./Watchlist/watchlist";
import {useEffect, useState} from "react";

const AppN = () => {
  const [ movies, setMovies ] = useState();
  const [ genres, setGenres ] = useState();
  const [ selectedMovie, setSelectedMovie ] = useState();
  const [ reviews, setReviews ] = useState();
  const [ watchMovie, setWatchMovie ] = useState();

  console.log('movies here: ',movies);
  console.log('genres here: ',genres);
  console.log('reviews here: ',reviews);

  const addMovieToWatchlist = (e) => {
    setWatchMovie(watchMovie.concat(e))
  }

  const loadMovies = () => {
    EShopService.fetchMovies()
      .then((data) => {
        console.log('data here: ', data.data);
        setMovies(data.data);
      });
  }

  const loadGenres = () => {
    EShopService.fetchGenres()
      .then((data) => {
        setGenres(data.data)
      });
  }

  const loadReviews = () => {
    EShopService.fetchReviews()
      .then((data) =>  {
        setReviews(data.data)
      });
  }

  const deleteMovie = (id) => {
    EShopService.deleteMovie(id)
      .then(() => {
        loadMovies();
      });
  }

  const getMovie = (id) => {
    EShopService.getMovie(id)
      .then((data) => {
        setSelectedMovie(data.data)
      })
  }

  const editMovie = (id, name, description, genre, movieImg) => {
    EShopService.editMovie(id, name, description, genre, movieImg)
      .then(() => {
        loadMovies();
      });
  }

  const addMovie = (name, description, genre, movieImg) => {
    EShopService.addMovie(name, description, genre, movieImg)
      .then(() => {
        loadMovies();
      });
  }

  const addReview = (stars, description, movie) => {
    EShopService.addReview(stars, description, movie)
      .then(() => {
        loadReviews();
      });
  }

  useEffect(() => {
    loadMovies();
    loadGenres();
    loadReviews();
  }, []);

  return (
    <div>
      <Router>
        <Header/>
        <main>
          <div className={"container"}>
            <Routes>
              <Route path={"/movies/add"}
                     element={
                       <MovieAdd onAddMovie={addMovie}
                                 genres={genres}/>
                     }/>
              <Route path={"/movies/edit/:id"}
                     element={<MovieEdit onEditMovie={editMovie}
                                         genres={genres}
                                         movie={selectedMovie}/>}/>
              <Route path={"/movies/review/:id"}
                     element={
                       <ReviewCardStyled>
                         <MovieReview reviews={reviews}
                                      movie={selectedMovie}
                                      onAddReview={addReview}/>
                       </ReviewCardStyled>}/>
              <Route path="movies"
                     element={<Movies movies={movies}
                                      genres={genres}
                                      onDelete={deleteMovie}
                                      onEdit={getMovie}
                                      onReview={getMovie}
                                      onAddWatch={addMovieToWatchlist}
                     />}/>
              <Route path="watchlist"
                     element={<Watchlist watchMovie={watchMovie}
                     />}/>
            </Routes>
          </div>
        </main>

      </Router>
      hello world</div>
  );
};

export default AppN;