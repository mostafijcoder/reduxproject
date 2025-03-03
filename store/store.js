// store/store.js
import { createStore } from "redux";
import rootReducer from "./reducers";

// Create Redux Store
const store = createStore(rootReducer);

export default store;
