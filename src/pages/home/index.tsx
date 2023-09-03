import React from "react";
import Button from "antd/es/button";
import { TrainerList, TrainerRegistrationModal } from "./components";
import { ControlsWrapper, HomeContainer } from "./Home.styles";
import { useBoolean } from "hooks";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();

  return (
    <HomeContainer>
      <ControlsWrapper>
        <Button>Start Tournament</Button>
        <Button onClick={setBoolToTrue} type="primary">
          Trainer Registration
        </Button>
      </ControlsWrapper>
      <TrainerList />
      <TrainerRegistrationModal onCancel={setBoolToFalse} open={bool} />
    </HomeContainer>
  );
};

export default HomePage;
