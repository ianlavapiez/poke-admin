import styled from "styled-components";
import Button from "antd/es/button";

export const AddButton = styled(Button)`
  width: 200px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 60%;
  }
`;

export const Header = styled.h3`
  color: white;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 25px;
    line-height: 18px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.hr`
  margin: 20px 0;
`;

export const Name = styled.h3`
  font-size: 30px;
  line-height: 28px;
  color: white;
  text-align: center;
`;

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  height: 100vh;
  overflow: scroll;
`;

export const Rank = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: gold;
  text-align: center;
`;

export const TrainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    display: none;
  }
`;
