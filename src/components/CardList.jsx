import React from "react";
import Card from "./Card";

const CardList = ({ robots, searchText }) => (
  <div>
    {robots
      .filter(({ username }) =>
        username.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((robot) => (
        <Card key={robot.id} {...robot} />
      ))}
  </div>
);

export default CardList;
