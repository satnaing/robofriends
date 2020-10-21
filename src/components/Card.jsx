import React from "react";

const Card = ({ id, name, username, email }) => (
  <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}.png?size=200x200`} alt={name} />
    <div>
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
  </div>
);

export default Card;
