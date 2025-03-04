// store/store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";  // Import redux-thunk
import rootReducer from "./reducers";

// Create Store with Middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
