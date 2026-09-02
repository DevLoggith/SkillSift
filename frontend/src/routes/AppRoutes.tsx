import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Charts from "../pages/Charts";
import List from "../pages/List";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/list", element: <List /> },
  { path: "/charts", element: <Charts /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
