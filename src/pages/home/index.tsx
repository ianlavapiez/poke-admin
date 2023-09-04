import React from "react";
import Button from "antd/es/button";
import { TrainerList, TrainerRegistrationModal } from "./components";
import {
  ButtonWrapper,
  ControlsWrapper,
  HomeContainer,
  Title,
} from "./Home.styles";
import { useBoolean, useMessage } from "hooks";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();
  const { contextHolder, openMessage } = useMessage();

  return (
    <HomeContainer>
      {contextHolder}
      <ControlsWrapper>
        <Title>Poké-Admin</Title>
        <ButtonWrapper>
          <Button>Start Tournament</Button>
          <Button onClick={setBoolToTrue} type="primary">
            Trainer's Registration
          </Button>
        </ButtonWrapper>
      </ControlsWrapper>
      <TrainerList />
      <TrainerRegistrationModal
        close={setBoolToFalse}
        open={bool}
        openMessage={openMessage}
      />
    </HomeContainer>
  );
};

export default HomePage;
