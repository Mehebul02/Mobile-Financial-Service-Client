import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:'/register',
    element:<Dashboard/>

  },
  
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
