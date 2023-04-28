import { createBrowserRouter, redirect } from "react-router-dom";

import Main from "../layouts";
import Home from "../pages/home/home";
import LoginCard from "../pages/login/login";
import Signup from "../pages/signup/signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginCard />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/profile',
        element: <Home />,
        loader: () => {
          if (!localStorage.getItem('token')) {
            return redirect('/login')
          } else {
            return null
          }
        },
        children: [
            {
              path: '/profile',
              element: <Home />,
            }
        ]
      },
      
    ],
  },
])

export default router