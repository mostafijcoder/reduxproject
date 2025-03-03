// store/actions/index.js

// Action Type (constant to avoid typos)
export const UPDATE_TEXT = "UPDATE_TEXT";

// Action Creator Function
export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,  // Specifies what action should be performed
    payload: text,      // Contains the new value for state
  };
};
