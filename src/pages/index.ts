import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const TrainerPage = lazy(() => import("./trainer"));

export { HomePage, TrainerPage };
