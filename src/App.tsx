import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "common";
import { HomePage } from "pages";
import GlobalStyle from "./global.styles";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
