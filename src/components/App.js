import {Component} from "react";
import EShopService from "../repository/emovieRepository";
import Header from "./Header/header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Movies from "./Movies/MoviesList/movies";
import MovieAdd from "./Movies/MovieAdd/movieAdd";
import MovieEdit from "./Movies/MovieEdit/movieEdit";
import MovieReview from "./Movies/MovieReview/movieReview";
import {ReviewCardStyled} from "./styles/ReviewCard.styled";
import Watchlist from "./Watchlist/watchlist";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMovie: {},
            watchMovie: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/movies/add"}
                                   element={
                                       <MovieAdd onAddMovie={this.addMovie}/>
                                   }/>
                            <Route path={"/movies/edit/:id"}
                                   element={<MovieEdit onEditMovie={this.editMovie}
                                                       movie={this.state.selectedMovie}/>}/>
                            <Route path={"/movies/review/:id"}
                                   element={
                                       <ReviewCardStyled>
                                           <MovieReview movie={this.state.selectedMovie}/>
                                       </ReviewCardStyled>}/>
                            <Route path="movies"
                                   element={<Movies onDelete={this.deleteMovie}
                                                    onEdit={this.getMovie}
                                                    onReview={this.getMovie}
                                                    onAddWatch={this.addMovieToWatchlist}
                                   />}/>
                            <Route path="watchlist"
                                   element={<Watchlist watchMovie={this.state.watchMovie}
                                   />}/>
                        </Routes>
                    </div>
                </main>

            </Router>

        );
    }

    componentDidMount() {
        this.loadMovies();
        this.loadGenres();
        this.loadReviews();
    }

    addMovieToWatchlist = (e) => {
        this.setState({
            watchMovie: this.state.watchMovie.concat(e)
        })
        console.log(this.state.watchMovie)
    }
    loadMovies = () => {
        EShopService.fetchMovies()
            .then((data) => {
                this.setState({
                    movies: data.data
                })
            });
    }
    loadGenres = () => {
        EShopService.fetchGenres()
            .then((data) => {
                this.setState({
                    genres: data.data
                })
            });
    }
    loadReviews = () => {
        EShopService.fetchReviews()
            .then((data) => {
                this.setState({
                    reviews: data.data
                })
            });
    }
    deleteMovie = (id) => {
        EShopService.deleteMovie(id)
            .then(() => {
                this.loadMovies();
            });
    }
    getMovie = (id) => {
        EShopService.getMovie(id)
            .then((data) => {
                this.setState({
                    selectedMovie: data.data
                })
            })
    }
    editMovie = (id, name, description, genre, movieImg) => {
        EShopService.editMovie(id, name, description, genre, movieImg)
            .then(() => {
                this.loadMovies();
            });
    }
    addMovie = (name, description, genre, movieImg) => {
        EShopService.addMovie(name, description, genre, movieImg)
            .then(() => {
                this.loadMovies();
            });
    }
    addReview = (stars, description, movie) => {
        EShopService.addReview(stars, description, movie)
            .then(() => {
                this.loadReviews();
            });
    }
}


export default App;