import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Mainlayout from "./Mainlayout/Mainlayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
