import React from "react";
import { connect } from "react-redux";
import changeSearchText from "../redux/actions/changeSearchText";

const SearchBox = ({ searchText, changeSearchText }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="text"
      placeholder="search robots"
      value={searchText}
      // onChange={(evt) => dispatch(changeSearchText(evt.target.value))}
      onChange={(evt) => changeSearchText(evt.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  changeSearchText: (txt) => dispatch(changeSearchText(txt)),
});

const mapStateToProps = (state) => ({ searchText: state.searchText });

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
