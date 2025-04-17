import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Settings from '../pages/Settings'
import Layout from '../components/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'transactions',
        element: <Transactions />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])