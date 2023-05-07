import { createBrowserRouter, redirect } from 'react-router-dom'

import Main from '../layouts'
import Home from '../pages/home/home'
import LoginCard from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Profile from '../pages/profile/profile'
import Events from '../pages/events/events'
import Calendar from '../pages/calendar/calendar'
import AboutUs from '../pages/aboutUs/aboutUs'
import AllMembers from '../pages/adminView/members/allMembers'
import OneMember from '../pages/adminView/members/oneMember'

const privateRoutes = () => {
  if (!localStorage.getItem('token')) {
    return redirect('/login')
  } else {
    return null
  }
}

const adminRoutes = () => {
  if (
    localStorage.getItem('role') !== 'admin' ||
    !localStorage.getItem('token')
  ) {
    return redirect('/')
  } else {
    return null
  }
}

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
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginCard />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
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
       },
       {
        path: '/donation',
        element: <Donation />
      },
      {
        path: '',
        loader: privateRoutes,
        children: [
          {
            path: 'profile',
            element: <Profile />,
            children: [
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
          },
            ],
          },
        ],
      },
      {
        path: '/adminView',
        loader: adminRoutes,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'members',
            children: [
              {
                path: '',
                element: <AllMembers />,
              },
              {
                path: ':id',
                element: <OneMember />,
              },
            ],
          },
        ],
      },
    ],
  },
])

export default router
