// store/reducers/textReducer.js
import { UPDATE_TEXT, FETCH_TEXT_SUCCESS, FETCH_TEXT_ERROR } from "../actions";

const initialState = {
  text: "Initial Redux State",
  error: null,
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_TEXT_SUCCESS:
      return {
        ...state,
        text: action.payload,  // Update state with fetched data
      };
    case FETCH_TEXT_ERROR:
      return {
        ...state,
        error: action.payload,  // Store error message
      };
    default:
      return state;
  }
};

export default textReducer;
