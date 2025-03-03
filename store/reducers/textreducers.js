// store/reducers/textReducer.js
import { UPDATE_TEXT } from "../actions";

// Initial State (default value)
const initialState = {
  text: "Initial Redux State",
};

// Reducer Function (modifies state based on actions)
const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,   // Keep previous state
        text: action.payload,  // Update the `text` property
      };
    default:
      return state;  // Return the same state if action is not recognized
  }
};

export default textReducer;
