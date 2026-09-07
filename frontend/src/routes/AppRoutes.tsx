import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import About from "../pages/About";
import Charts from "../pages/Charts";
import Home from "../pages/Home";
import List from "../pages/List";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "list", element: <List /> },
      { path: "charts", element: <Charts /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
