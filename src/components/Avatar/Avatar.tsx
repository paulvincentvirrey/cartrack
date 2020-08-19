import React from "react";
import "./Avatar.css";
import userImg from "../../images/avatar.png";

const Avatar = () => {
  return (
    <div className="card__avatar">
      <img src={userImg} alt=""></img>
    </div>
  );
};
export default Avatar;
