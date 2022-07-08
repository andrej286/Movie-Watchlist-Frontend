import EShopService from "../../repository/emovieRepository";
import {setReviewData} from "../redux/reviews/actions";
import {useDispatch} from "react-redux";

// TODO: 7/8/2022 Not in use, try adding.
export const useAddReview = (formData, movieId) => {

  const dispatch = useDispatch();

  EShopService.addReview(formData.stars, formData.description, movieId)
      .then(() => {
        EShopService.fetchReviews()
          .then((data) => {
            dispatch(setReviewData(data.data));
          })
      });
}
// const [addingReviewStatus, setAddingReviewStatus] = useState(false);
//
//
// EShopService.addReview(formData.stars, formData.description, movieId)
//   .then(() => {
//     this.loadReviews();
//   })
//   .finally(() => setAddingReviewStatus(true));
