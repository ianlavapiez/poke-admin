import React from "react";
import FemaleImg from "assets/female.webp";
import MaleImg from "assets/male.webp";
import {
  ProfileContainer,
  ProfileName,
  ProfilePicture,
  Rank,
} from "./Profile.styles";

type Props = {
  trainer: Trainer;
};

const Profile: React.FC<Props> = ({ trainer }) => {
  const { gender, name, rank } = trainer || {};

  return (
    <ProfileContainer>
      <ProfilePicture
        alt="profile"
        src={gender === "Male" ? MaleImg : FemaleImg}
      />
      <ProfileName>{name}</ProfileName>
      <Rank>{rank}</Rank>
    </ProfileContainer>
  );
};

export default Profile;
