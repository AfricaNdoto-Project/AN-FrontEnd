import { createBrowserRouter, redirect } from 'react-router-dom'

import Main from '../layouts'
import Home from '../pages/home/home'
import LoginCard from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Profile from '../pages/profile/profile'
import Projects from '../pages/projects/projects'
import Events from '../pages/events/events'
import Calendar from '../pages/calendar/calendar'
import AboutUs from '../pages/aboutUs/aboutUs'
import AllMembers from '../pages/adminView/members/allMembers'
import OneMember from '../pages/adminView/members/oneMember'

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
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
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
        ],
      },
      {
        path: '/adminView',
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
            element: <Home />,
          },
          {
            path: 'members',
            element: <AllMembers />,
          },
          {
            path: 'members/:id',
            element: <OneMember />
          },
        ],
      },
    ],
  },
])

export default router
