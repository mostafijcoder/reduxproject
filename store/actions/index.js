// store/actions/index.js
export const UPDATE_TEXT = "UPDATE_TEXT";
export const FETCH_TEXT_SUCCESS = "FETCH_TEXT_SUCCESS";
export const FETCH_TEXT_ERROR = "FETCH_TEXT_ERROR";

// Synchronous Action
export const updateText = (text) => ({
  type: UPDATE_TEXT,
  payload: text,
});

// Asynchronous Action with Redux Thunk
export const fetchRandomText = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
      const data = await response.json();
      dispatch({ type: FETCH_TEXT_SUCCESS, payload: data[0] });
    } catch (error) {
      dispatch({ type: FETCH_TEXT_ERROR, payload: error.message });
    }
  };
};
