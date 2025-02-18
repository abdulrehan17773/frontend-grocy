import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Cart, Signup } from "../pages";
import Protected from "../components/AuthLayer.jsx";
import {Layout} from ".";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: '/cart',
        element: (
          <Protected authentication={true}>
            <Cart />
          </Protected>
        ),
      },
    ],
  },
]);

export default router;