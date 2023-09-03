import React from "react";
import FemaleImg from "assets/female.webp";
// import MaleImg from "assets/male.webp";
import {
  ProfileContainer,
  ProfileName,
  ProfilePicture,
  Rank,
} from "./Profile.styles";

type Props = {};

const Profile: React.FC<Props> = () => {
  return (
    <ProfileContainer>
      <ProfilePicture alt="profile" src={FemaleImg} />
      <ProfileName>Athelia Aethos</ProfileName>
      <Rank>Master</Rank>
    </ProfileContainer>
  );
};

export default Profile;
