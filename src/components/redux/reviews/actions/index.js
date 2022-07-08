export const SET_REVIEW_DATA = "WL@SET_REVIEW_DATA";
// export const ADD_REVIEW_DATA = "WL@ADD_REVIEW_DATA";

export function setReviewData(reviewData) {
  return {
    type: SET_REVIEW_DATA,
    reviewData,
  };
}

// export function addReviewData(newReviewData) {
//   return {
//     type: ADD_REVIEW_DATA,
//     newReviewData,
//   };
// }
