// store/reducers/index.js
import { combineReducers } from "redux";
import textReducer from "./textreducers";

// Combine all reducers
const rootReducer = combineReducers({
  textState: textReducer,  // textState manages `textReducer`
});

export default rootReducer;
