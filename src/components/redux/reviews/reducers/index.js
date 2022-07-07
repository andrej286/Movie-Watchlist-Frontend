import { SET_REVIEW_DATA } from "../actions";

export function setReviewData(state = [], action) {
  switch (action.type) {
    case SET_REVIEW_DATA:
      return [...state, action.reviewData];
    default:
      return state;
  }
}
