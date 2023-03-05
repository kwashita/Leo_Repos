import React from "react";
import "./UserInfo.css";
const UserInfo = ({ user }) => {
  return (
    <div className="userInfo" data-id={user.id}>
      <sup>{user.id}</sup>
      <h3>{user.name}</h3>
      <em>{user.email}</em>
    </div>
  );
};

export default UserInfo;
