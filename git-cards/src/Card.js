import React from "react";

const Card = (props) => {
  return (
    <div className="cardContainer container">
      <h3 className="name">{props.user.name}</h3>
      <img className="image" alt="Avatar Image" src={props.user.avatar_url} />
      <h5 className="username">Username: {props.user.login}</h5>
      <div className="container">
        <p>Followers: {props.followers}</p>
        <p>Following: {props.user.following}</p>
      </div>
    </div>
  );
};

export default Card;
