import { createBrowserRouter, redirect } from "react-router-dom";

import Main from "../layouts";
import Home from "../pages/home/home";
import LoginCard from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Profile from "../pages/profile/profile";

import NewProject from "../pages/newproject/newproject";
import Project from "../pages/project/project";
import AllProjects from "../pages/allprojects/allprojects";
import Edit from "../pages/profile/edit/edit";
import Delete from "../pages/profile/delete/delete";
import Donation from "../pages/makeDonation/makeDonation";

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

        path: '/project',
        element: <Project />,
      },
      {
        path: '/allprojects',
        element: <AllProjects />,
      },
      {
        path: '/newproject',
        element: <NewProject />,

        path: '/donation',
        element: <Donation />

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
          },
          {
            path: 'donations',
            element: <Donation />,
          }
        ],
      },
    ],
  },
])

export default router