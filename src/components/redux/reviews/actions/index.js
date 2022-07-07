export const SET_REVIEW_DATA = "WL@SET_REVIEW_DATA";

export function setReviewData(reviewData) {
  return {
    type: SET_REVIEW_DATA,
    reviewData,
  };
}
