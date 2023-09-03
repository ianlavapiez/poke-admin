import React from "react";
import Spin from "antd/es/spin";
import { SpinnerContainer } from "./Spinner.styles";

type Props = {};

const Spinner: React.FC<Props> = () => {
  return (
    <SpinnerContainer>
      <Spin size="large" />
    </SpinnerContainer>
  );
};

export default Spinner;
