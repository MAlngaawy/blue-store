import React from "react";
import AuthUtils from "../auth/authUtils/authUtils";

type Props = {};

const Profile = (props: Props) => {
  const user = AuthUtils.getUsrtProfileData();

  console.log(user);

  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={() => {
          AuthUtils.updateUserName(
            "New User Name",
            "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
          );
        }}
      >
        Update User
      </button>
    </div>
  );
};

export default Profile;
