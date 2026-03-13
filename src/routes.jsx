import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Mainlayout from "./Mainlayout/Mainlayout";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/guess-animal", 
  },
);

export default routes;
