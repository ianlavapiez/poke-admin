import React, { ChangeEvent, useEffect, useState } from "react";
import Button from "antd/es/button";
import Input from "antd/es/input";
import { TrainerList, TrainerRegistrationModal } from "./components";
import {
  ButtonWrapper,
  ControlsWrapper,
  HomeContainer,
  Title,
} from "./Home.styles";
import { useBoolean, useMessage } from "hooks";
import { useActionContext, useContext } from "contexts/Context";
import { startTournament } from "utils/validation";

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredTrainers, setFilteredTrainers] = useState<Trainer[]>([]);

  const { isSimulationStarted, trainers } = useContext();
  const { dispatch } = useActionContext();

  const { bool, setBoolToFalse, setBoolToTrue } = useBoolean();
  const { contextHolder, openMessage } = useMessage();

  useEffect(() => {
    if (trainers.length > 0) {
      if (searchText) {
        const filterTrainers = trainers.filter((trainer) =>
          trainer.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredTrainers(filterTrainers);
      } else {
        setFilteredTrainers(trainers);
      }
    }
  }, [searchText, trainers]);

  useEffect(() => {
    if (isSimulationStarted) {
      setTimeout(() => {
        dispatch({
          type: "UPDATE_SIMULATION",
          payload: {
            isStarted: false,
          },
        });

        openMessage({
          type: "success",
          text: "Battle simulation finished!",
        });
      }, 5000);
    }
  }, []);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onStartTournament = () => {
    const hasStarted = startTournament(trainers);

    if (typeof hasStarted === "string") {
      return openMessage({
        type: "error",
        text: hasStarted,
      });
    }

    if (hasStarted === true) {
      dispatch({
        type: "UPDATE_SIMULATION",
        payload: {
          isStarted: hasStarted,
        },
      });

      return openMessage({
        type: "success",
        text: "Battle simulation started!",
      });
    }
  };

  return (
    <HomeContainer>
      {contextHolder}
      <ControlsWrapper>
        <Title>Poké-Admin</Title>
        <ButtonWrapper>
          <Input.Search
            onChange={onSearchChange}
            placeholder="Search here..."
          />
          <Button disabled={isSimulationStarted} onClick={onStartTournament}>
            Start Tournament
          </Button>
          <Button
            disabled={isSimulationStarted}
            onClick={setBoolToTrue}
            type="primary"
          >
            Trainer's Registration
          </Button>
        </ButtonWrapper>
      </ControlsWrapper>
      <TrainerList openMessage={openMessage} trainers={filteredTrainers} />
      <TrainerRegistrationModal
        close={setBoolToFalse}
        open={bool}
        openMessage={openMessage}
      />
    </HomeContainer>
  );
};

export default HomePage;
