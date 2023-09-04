import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "common";
import { useMessage } from "hooks";
import { HomePage, TrainerPage } from "pages";
import GlobalStyle from "./global.styles";
import { TrainerProvider } from "contexts/Context";

type Props = {};

const App: React.FC<Props> = () => {
  const { contextHolder } = useMessage();

  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <TrainerProvider>
          {contextHolder}
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<TrainerPage />} path="/trainer/:id" />
          </Routes>
        </TrainerProvider>
      </Suspense>
    </Fragment>
  );
};

export default App;
