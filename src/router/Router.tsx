import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home/index'
import { History } from '../pages/History/index'
import { DefaultLayout } from '../layout/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/ignite-timer',
    element: <DefaultLayout />,
    children: [
      {
        path: '/ignite-timer',
        element: <Home />,
      },
      {
        path: '/ignite-timer/history',
        element: <History />,
      },
    ],
  },
])
