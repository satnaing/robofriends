import { combineReducers } from "redux";
import robotReducer from "./robotReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  searchText: searchReducer,
  robots: robotReducer,
});
