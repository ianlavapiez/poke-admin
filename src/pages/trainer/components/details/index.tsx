import React from "react";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import {
  AddButton,
  DetailsContainer,
  Header,
  HeaderWrapper,
  Line,
} from "./Details.styles";

type Props = {
  setBoolToTrue: () => void;
};

const Details: React.FC<Props> = ({ setBoolToTrue }) => {
  const navigate = useNavigate();

  const goBackToHomePage = (): void => navigate("/");

  return (
    <DetailsContainer>
      <HeaderWrapper>
        <Header>Pokémon Lineup</Header>
        <Button onClick={goBackToHomePage} type="primary">
          &lt; Go Back
        </Button>
      </HeaderWrapper>
      <Line />
      <AddButton onClick={setBoolToTrue} type="primary">
        Add Pokémon
      </AddButton>
    </DetailsContainer>
  );
};

export default Details;
