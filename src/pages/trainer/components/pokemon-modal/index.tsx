import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";
import Select from "antd/es/select";
import { FormItem } from "common";
import { SubmitButton } from "./PokemonModal.styles";

type Props = ModalProps & {};

const PokemonModal: React.FC<Props> = ({ ...modalProps }) => {
  const onFinish = (values: PokemonRegistration) => {};

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      title="Pokémon Registration"
      {...modalProps}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <FormItem
          label="Pokémon's Name"
          name="name"
          rules={[{ required: true, message: "Please input your name." }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Pokémon"
          name="pokemon"
          rules={[
            { required: true, message: "Please select your desired pokemon." },
          ]}
        >
          <Select />
        </FormItem>
        <FormItem>
          <SubmitButton htmlType="submit" type="primary">
            Register Pokémon
          </SubmitButton>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default PokemonModal;
