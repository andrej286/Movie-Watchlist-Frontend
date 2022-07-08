import { SET_REVIEW_DATA} from "../actions";

export function setReviewData(state = [], action) {
  switch (action.type) {
    case SET_REVIEW_DATA:
      return action.reviewData;
    // case ADD_REVIEW_DATA: {
    //   return [...state, action.newReviewData];
    // }
    default:
      return state;
  }
}
