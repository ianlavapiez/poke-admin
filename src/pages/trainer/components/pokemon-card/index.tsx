import React from "react";
import Button from "antd/es/button";
import {
  ActionsWrapper,
  Avatar,
  AvatarWrapper,
  ColumnWrapper,
  Count,
  Name,
  NameWrapper,
  PokemonCardContainer,
  Title,
} from "./PokemonCard.styles";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useActionContext } from "contexts/Context";

type Props = {
  open: () => void;
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ open, pokemon }) => {
  const { dispatch } = useActionContext();

  const {
    id,
    base_experience,
    height,
    name,
    nickname,
    order,
    sprites,
    weight,
    pokedexId,
  } = pokemon || {};

  const openPokemonModalWithId = (): void => {
    dispatch({
      type: "UPDATE_POKEMON_ID",
      payload: {
        pokedexId,
        pokemonId: id,
        name: nickname,
      },
    });

    open();
  };

  return (
    <PokemonCardContainer>
      <AvatarWrapper>
        <Avatar alt={name} src={sprites.front_default} />
        <Title>{nickname}</Title>
      </AvatarWrapper>
      <NameWrapper>
        <Name>{name}</Name>
        <Title>Pokémon Name</Title>
      </NameWrapper>
      <ColumnWrapper>
        <Count>{order}</Count>
        <Title>Order</Title>
      </ColumnWrapper>
      <ColumnWrapper>
        <Count>{base_experience}</Count>
        <Title>Base Exp</Title>
      </ColumnWrapper>
      <ColumnWrapper>
        <Count>{weight}</Count>
        <Title>Weight</Title>
      </ColumnWrapper>
      <ColumnWrapper>
        <Count>{height}</Count>
        <Title>Height</Title>
      </ColumnWrapper>
      <ActionsWrapper>
        <Button
          onClick={openPokemonModalWithId}
          icon={<EditOutlined />}
          shape="circle"
          type="primary"
        />
        <Button
          danger
          icon={<DeleteOutlined />}
          shape="circle"
          type="primary"
        />
      </ActionsWrapper>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
