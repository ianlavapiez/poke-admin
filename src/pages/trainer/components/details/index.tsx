import React from "react";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import {
  AddButton,
  DetailsContainer,
  Header,
  HeaderWrapper,
  Line,
  PokemonWrapper,
} from "./Details.styles";

type Props = {
  setBoolToTrue: () => void;
  trainer: Trainer;
};

const Details: React.FC<Props> = ({ setBoolToTrue, trainer }) => {
  const navigate = useNavigate();

  const { pokemon } = trainer;

  const goBackToHomePage = (): void => navigate("/");

  console.log(pokemon);

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
      <PokemonWrapper>
        {pokemon.map(({ id, nickname }) => {
          return (
            <p style={{ color: "white" }} key={id}>
              {nickname}
            </p>
          );
        })}
      </PokemonWrapper>
    </DetailsContainer>
  );
};

export default Details;
