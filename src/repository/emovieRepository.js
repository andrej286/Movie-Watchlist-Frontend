import axios from "../custom-axios/axios";


const EShopService = {
    fetchMovies: () => {
        return axios.get("/movies");
    },
    deleteMovie: (id) => {
        return axios.delete(`/movies/delete/${id}`);
    },
    editMovie: (id, name, description, genre, movieImg) => {
        return axios.put(`/movies/edit/${id}`, {
            "name" : name,
            "description" : description,
            "genre" : genre,
            "movieImg" : movieImg
        });
    },
    getMovie: (id) => {
        return axios.get(`/movies/${id}`);
    },
    addMovie: (name, description, genre, movieImg) => {
        return axios.post("/movies/add", {
            "name" : name,
            "description" : description,
            "genre" : genre,
            "movieImg" : movieImg
        });
    },
    fetchGenres: () => {
        return axios.get("/movies/genres");
    },
    fetchReviews: () => {
        return axios.get("/reviews");
    },
    addReview: (stars, description, movie) => {
        return axios.post("/reviews/add", {
            "stars" : stars,
            "description" : description,
            "movie" : movie
        });
    }
}

export default EShopService