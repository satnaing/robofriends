import { FETCH_ROBOTS } from "../types";

const robotReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return action.payload;
    default:
      return state;
  }
};

export default robotReducer;
