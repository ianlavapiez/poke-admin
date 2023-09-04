import React from "react";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import { useMessage } from "hooks";
import { checkIfPokemonQuantityExceeds } from "utils/validation";
import { PokemonCard } from "..";
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

  const { contextHolder, openMessage } = useMessage();

  const { pokemon } = trainer;

  const goBackToHomePage = (): void => navigate("/");

  const isExceeds = checkIfPokemonQuantityExceeds(pokemon);

  return (
    <DetailsContainer>
      {contextHolder}
      <HeaderWrapper>
        <Header>Pokémon Lineup</Header>
        <Button onClick={goBackToHomePage} type="primary">
          &lt; Go Back
        </Button>
      </HeaderWrapper>
      <Line />
      {!isExceeds && (
        <AddButton onClick={setBoolToTrue} type="primary">
          Add Pokémon
        </AddButton>
      )}
      <PokemonWrapper>
        {pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            open={setBoolToTrue}
            openMessage={openMessage}
            pokemon={pokemon}
          />
        ))}
      </PokemonWrapper>
    </DetailsContainer>
  );
};

export default Details;
