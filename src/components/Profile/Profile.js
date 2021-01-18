import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">huynh minh hoang</Typography>
        <Typography className="title">Web Developer</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../../src/assets/images/h.jpg").default} />
      </figure>

      <div className="profile_information">
        Timeline information
        <br />
        <button>btn</button>
      </div>
    </div>
  );
};

export default Profile;
