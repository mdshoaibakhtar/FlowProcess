import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Dashboard from '../pages/Dashboard';
import Inbox from '../pages/Inbox';
import Requests from '../pages/Requests';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import ProfileSettings from '../pages/ProfileSettings';
import KpiDetails from '../pages/KpiDetails';
import Login from '../pages/Login';
import Workflows from '../pages/Workflows';
import { EmailTemplate } from '../pages/templates/EmailTemplate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'workflows', element: <Workflows /> },
      { path: 'templates/email', element: <EmailTemplate /> },
      { path: 'inbox', element: <Inbox /> },
      { path: 'requests', element: <Requests /> },
      { path: 'users', element: <Users /> },
      { path: 'settings', element: <Settings /> },
      { path: 'profile-settings', element: <ProfileSettings /> },
      { path: 'kpi/:kpiId', element: <KpiDetails /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
