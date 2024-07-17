import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:'/register',
    element:<Register/>

  },
  
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
