import React from "react";
import ProfileSection from "../components/section/profileSection/ProfileSection";
import ProfilePageStyled from "./ProfilePageStyled"
const ProfilePage = () => {
  return (
    <React.Fragment>
      <ProfilePageStyled/>
      <ProfileSection />
    </React.Fragment>
  );
};

export default ProfilePage;