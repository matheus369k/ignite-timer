import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/Home/index'
import { History } from '../pages/History/index'
import { DefaultLayout } from '../layout/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
])
