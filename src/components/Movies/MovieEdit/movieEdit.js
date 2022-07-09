import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGenreData } from "../../redux/genres/selectors";
import EShopService from "../../../repository/emovieRepository";
import { setMovieData } from "../../redux/movies/actions";

const MovieEdit = (props) => {
  const genres = useSelector(getGenreData);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, updateFormData] = React.useState({
    name: "",
    description: "",
    genre: 1,
    movieImg: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name !== "" ? formData.name : props.movie.name;
    const description =
      formData.description !== ""
        ? formData.description
        : props.movie.description;
    const genre = formData.genre;
    const movieImg = formData.movieImg;

    EShopService.editMovie(
      props.movie.id,
      name,
      description,
      genre,
      movieImg
    ).then(() => {
      EShopService.fetchMovies().then((data) => {
        dispatch(setMovieData(data.data));
      });
    });

    navigate("/movies");
  };

  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Movie name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              placeholder={props.movie.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Movie Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder={props.movie.description}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Movie Image</label>
            <input
              type="text"
              className="form-control"
              id="movieImg"
              name="movieImg"
              placeholder={props.movie.movieImg}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select
              name="genre"
              className="form-control"
              onChange={handleChange}
            >
              {genres.map((term) => (
                <option value={term.id}>{term}</option>
              ))}
            </select>
          </div>
          <button id="submit" type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieEdit;
