import { createBrowserRouter, redirect } from "react-router-dom";

import Main from "../layouts";
import Home from "../pages/home/home";
import LoginCard from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Profile from "../pages/profile/profile";
import Edit from "../pages/profile/edit/edit";
import Delete from "../pages/profile/delete/delete";

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
        loader: () => {
          if (!localStorage.getItem('token')) {
            return redirect('/login')
          } else {
            return null
          }
        },
        children: [
          {
            path: '',
            element: <Profile />,
          },
          {
            path: 'edit/:id',
            element: <Edit />,
          },
          {
            path: 'delete/:id',
            element: <Delete />,
          }
        ],
      },
    ],
  },
])

export default router