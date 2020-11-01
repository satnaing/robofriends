import { CHANGE_SEARCH_TEXT } from "../types";

const initialState = "";

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
