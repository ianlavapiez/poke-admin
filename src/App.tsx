import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "common";
import GlobalStyle from "./global.styles";
import { HomePage } from "pages";

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
