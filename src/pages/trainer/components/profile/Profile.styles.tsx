import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 30%;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: flex;
  }
`;

export const ProfileName = styled.h3`
  font-size: 30px;
  line-height: 45px;
  color: white;
  text-align: center;
`;

export const ProfilePicture = styled.img`
  width: 250px;
  height: 500px;
`;

export const Rank = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: gold;
  text-align: center;
`;
