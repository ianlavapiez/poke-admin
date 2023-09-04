import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
  }
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 40px;
  color: black;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 30px;
    line-height: 40px;
  }
`;
