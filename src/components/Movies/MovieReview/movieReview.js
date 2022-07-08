import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewData } from "../../redux/reviews/selectors";
import EShopService from "../../../repository/emovieRepository";
import { setReviewData } from "../../redux/reviews/actions";

const MovieReview = (props) => {
  const reviews = useSelector(getReviewData);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, updateFormData] = React.useState({
    stars: 1,
    description: "",
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmitReview = (e) => {
    e.preventDefault();
    // TODO: 7/8/2022 extract logic in the useAddReview hook.
    EShopService.addReview(
      formData.stars,
      formData.description,
      props.movie.id
    ).then(() => {
      EShopService.fetchReviews().then((data) => {
        dispatch(setReviewData(data.data));
      });
    });

    navigate(`/movies/review/${props.movie.id}`);
  };

  return (
    <div>
      <form onSubmit={onFormSubmitReview}>
        <div className="form-group" style={{ width: "200px" }}>
          <label htmlFor="price">Review Description</label>
          <input
            type="text"
            className="form-control rounded-3"
            id="description"
            name="description"
            placeholder="Description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ width: "200px" }}>
          <label>Stars</label>
          <select
            name="stars"
            className="form-control rounded-3"
            onChange={handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          id="submit"
          type="submit"
          className={"btn btn-dark my-2 rounded-2"}
          style={{ color: "rgb(223,185,93)" }}
        >
          Submit
        </button>
      </form>
      <div
        style={{
          width: "450px",
          height: "300px",
          backgroundColor: "black",
          borderRadius: "5%",
        }}
      >
        {reviews.map((term) => {
          if (props.movie.id === term.movie.id) {
            return (
              <div className={"text-light ps-3 pt-1"}>
                {term.description}
                <i
                  className={"bi bi-star ps-3"}
                  style={{ color: "rgb(223,185,93)" }}
                />
                {term.stars}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default MovieReview;
