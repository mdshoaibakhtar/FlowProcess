import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/Dashboard';
import Workflows from '../pages/Workflows';
import Inbox from '../pages/Inbox';
import Requests from '../pages/Requests';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'workflows', element: <Workflows /> },
      { path: 'inbox', element: <Inbox /> },
      { path: 'requests', element: <Requests /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
