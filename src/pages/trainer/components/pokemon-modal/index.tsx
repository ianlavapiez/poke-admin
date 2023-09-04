import React, { useEffect, useState } from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";
import Select from "antd/es/select";
import { FormItem } from "common";
import { useActionContext, useContext } from "contexts/Context";
import { useBoolean } from "hooks";
import { OpenMessageType } from "hooks/useMessage";
import { getPokemon, getPokemonDetails } from "pages/api/poke-api";
import { SubmitButton } from "./PokemonModal.styles";
import { checkIfPokemonQuantityExceeds } from "utils/validation";

type Props = ModalProps & {
  close: () => void;
  openMessage: ({ type, text }: OpenMessageType) => void;
};

const PokemonModal: React.FC<Props> = ({
  close,
  openMessage,
  ...modalProps
}) => {
  const [pokemonOptions, setPokemonOptions] = useState<Options[]>([]);

  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();

  const { dispatch } = useActionContext();
  const { pokemonForm, selectedTrainer, trainers } = useContext();

  useEffect(() => {
    let unsubscribed = false;

    getPokemon().then((response) => {
      if (response !== undefined && !unsubscribed) {
        setPokemonOptions(response);
      }
    });

    return () => {
      unsubscribed = true;
    };
  }, []);

  const onFinish = async (values: { name: string; pokemonId: string }) => {
    const { name, pokemonId } = values;

    if (checkIfPokemonQuantityExceeds(selectedTrainer.pokemon)) {
      return openMessage({
        type: "info",
        text: "Uh-oh! You have exceeded the maximum pokemon set (6).",
      });
    }

    setBoolToTrue();

    const pokemonDetails: Pokemon | undefined = await getPokemonDetails(
      pokemonId,
      name
    );

    if (pokemonDetails !== undefined) {
      setBoolToFalse();

      dispatch({
        type: "ADD_POKEMON",
        payload: {
          data: {
            pokemon: pokemonDetails,
            trainer: selectedTrainer,
            trainers,
            id: pokemonForm.pokemonId ? pokemonForm.pokemonId : undefined,
          },
        },
      });

      close();

      dispatch({
        type: "UPDATE_POKEMON_ID",
        payload: {
          pokedexId: "",
          pokemonId: "",
          name: "",
        },
      });

      return openMessage({
        type: "success",
        text: "Successfully added new pokemon details.",
      });
    }

    return openMessage({
      type: "error",
      text: "Oops, something went wrong. Please try again.",
    });
  };

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      onCancel={close}
      title="Pokémon Registration"
      {...modalProps}
    >
      <Form
        initialValues={{
          name: pokemonForm.name ? pokemonForm.name : "",
          pokemonId: pokemonForm.pokedexId ? pokemonForm.pokedexId : "",
        }}
        layout="vertical"
        onFinish={onFinish}
      >
        <FormItem
          label="Pokémon's Name"
          name="name"
          rules={[{ required: true, message: "Please input your name." }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Pokémon"
          name="pokemonId"
          rules={[
            { required: true, message: "Please select your desired pokemon." },
          ]}
        >
          <Select options={pokemonOptions} />
        </FormItem>
        <FormItem>
          <SubmitButton htmlType="submit" loading={bool} type="primary">
            Add Pokémon
          </SubmitButton>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default PokemonModal;
