import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Charts from "../pages/Charts";
import List from "../pages/List";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/list", element: <List /> },
  { path: "/charts", element: <Charts /> },
  { path: "/about", element: <About /> },
]);

export default router;
