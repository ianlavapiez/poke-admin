import React from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal, { ModalProps } from "antd/es/modal";
import Select from "antd/es/select";
import { InfoCircleOutlined } from "@ant-design/icons";
import { FormItem } from "common";
import { SubmitButton } from "./TrainerRegistrationModal.styles";

type Props = ModalProps & {};

const TrainerRegistrationModal: React.FC<Props> = ({ ...modalProps }) => {
  const genderOptions: Options[] = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
  ];

  const rankOptions: Options[] = [
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
      title="Trainer's Registration"
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
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender." }]}
        >
          <Select options={genderOptions} />
        </FormItem>
        <FormItem
          label="Rank"
          name="rank"
          rules={[{ required: true, message: "Please select your rank." }]}
          tooltip={{
            icon: <InfoCircleOutlined />,
            title:
              "Ranking list (from left to right, left is the starting rank): Beginner > Great > Expert > Veteran > Ultra > Master",
          }}
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
