import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const CardList = ({ robots, searchText }) => (
  <div>
    {robots
      .filter(
        ({ username }) =>
          username.toLowerCase().includes(searchText.toLowerCase()) //.toLowerCase()
      )
      .map((robot) => (
        <Card key={robot.id} {...robot} />
      ))}
  </div>
);

const mapStateToProps = (state) => {
  return { searchText: state.searchText };
};

export default connect(mapStateToProps)(CardList);
