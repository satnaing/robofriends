import { CHANGE_SEARCH_TEXT } from "../types";

const changeSearchText = (txt) => ({
  type: CHANGE_SEARCH_TEXT,
  payload: txt,
});

export default changeSearchText;
