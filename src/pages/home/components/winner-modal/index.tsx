import React from "react";
import Modal, { ModalProps } from "antd/es/modal";
import { useContext } from "contexts/Context";
import { Name, Rank } from "./WinnerModal.styles";

type Props = ModalProps & {
  close: () => void;
};

const WinnerModal: React.FC<Props> = ({ close, ...modalProps }) => {
  const { trainers } = useContext();

  const winningTrainer = trainers[Math.floor(Math.random() * trainers.length)];

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      onCancel={close}
      title="Winning Trainer"
      {...modalProps}
    >
      <Name>{winningTrainer ? winningTrainer.name : ""}</Name>
      <Rank>{winningTrainer ? winningTrainer.rank : ""}</Rank>
    </Modal>
  );
};

export default WinnerModal;
