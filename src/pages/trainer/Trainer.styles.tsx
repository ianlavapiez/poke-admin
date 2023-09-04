import styled from "styled-components";

export const TrainerContainer = styled.div`
  width: 100%;
  background-color: #1b1f2c;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-top: 70px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-top: 100px;
  }
`;
