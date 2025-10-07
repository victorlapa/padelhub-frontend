import { createBrowserRouter } from "react-router";
import App from "./App";
import Onboarding from "./pages/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);
