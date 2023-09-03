import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";
import Select from "antd/es/select";
import { FormItem } from "common";
import { SubmitButton } from "./TrainerRegistrationModal.styles";

type Props = ModalProps & {};

const TrainerRegistrationModal: React.FC<Props> = ({ ...modalProps }) => {
  const rankOptions: { label: string; value: string }[] = [
    {
      label: "Beginner",
      value: "Beginner",
    },
    {
      label: "Great",
      value: "Great",
    },
    {
      label: "Expert",
      value: "Expert",
    },
    {
      label: "Veteran",
      value: "Veteran",
    },
    {
      label: "Ultra",
      value: "Ultra",
    },
    {
      label: "Master",
      value: "Master",
    },
  ];

  const onFinish = (values: TrainerRegistration) => {};

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      title="Trainer Registration"
      {...modalProps}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <FormItem
          label="Trainer's Name"
          name="name"
          rules={[{ required: true, message: "Please input your name." }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Rank"
          name="rank"
          rules={[{ required: true, message: "Please select your rank." }]}
        >
          <Select options={rankOptions} />
        </FormItem>
        <FormItem>
          <SubmitButton htmlType="submit" type="primary">
            Register
          </SubmitButton>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default TrainerRegistrationModal;
