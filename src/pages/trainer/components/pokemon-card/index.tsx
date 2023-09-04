import React from "react";
import Button from "antd/es/button";
import Popconfirm from "antd/es/popconfirm";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useActionContext, useContext } from "contexts/Context";
import { OpenMessageType } from "hooks/useMessage";
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

type Props = {
  open: () => void;
  openMessage: ({ type, text }: OpenMessageType) => void;
  pokemon: Pokemon;
};

const PokemonCard: React.FC<Props> = ({ open, openMessage, pokemon }) => {
  const { dispatch } = useActionContext();
  const { selectedTrainer, trainers } = useContext();

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

  const onDeletePokemon = (): void => {
    dispatch({
      type: "DELETE_POKEMON",
      payload: {
        data: {
          id,
          trainer: selectedTrainer,
          trainers,
        },
      },
    });

    openMessage({
      type: "success",
      text: "Successfully removed the selected pokémon.",
    });
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
        <Popconfirm
          title="Delete Pokémon"
          description="Are you sure you want to delete this pokemon on your set?"
          okText="Yes"
          onConfirm={onDeletePokemon}
        >
          <Button
            danger
            icon={<DeleteOutlined />}
            shape="circle"
            type="primary"
          />
        </Popconfirm>
      </ActionsWrapper>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
