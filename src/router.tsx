import { createBrowserRouter } from 'react-router-dom'

import BaseLayout from '@layouts/BaseLayout'

import Home from '@pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
