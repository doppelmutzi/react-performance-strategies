import React from "react";

import _ from "lodash/array";
// import _ from "lodash";

import Headline from "../components/Headline";

import { add } from "../components/util";

import "./Profile.css";

const Profile = () => {
  const array = [1, 2, 3];
  _.fill(array, "a");
  console.log(array);
  console.log("add", add(2, 2));
  return (
    <div className="profile">
      <Headline>Profile</Headline>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default Profile;
