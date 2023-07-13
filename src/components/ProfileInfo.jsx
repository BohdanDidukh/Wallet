import React from "react";
import { useSelector } from "react-redux";

import ProfileImage from "../assets/img/profile-image.jpg";

const ProfileInfo = () => {
  const balance = useSelector(
    (state) => state.transactions.balance,
  );
  return (
    <div className="ProfileInfo">
      <div className="ProfileInfo__wrapper">
        <img src={ProfileImage} alt="Profile" className="ProfileInfo__img" />
        <p className="ProfileInfo__title">Total Balance</p>
        <p className="ProfileInfo__balance">{balance}</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
