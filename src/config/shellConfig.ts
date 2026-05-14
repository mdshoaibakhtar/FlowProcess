import type { AppRole, RoleShellConfig } from '../types/app';

export const activeRole: AppRole = 'admin';

export const roleShellConfig: Record<AppRole, RoleShellConfig> = {
  admin: {
    role: 'admin',
    workspaceName: 'Processflow',
    workspaceTagline: 'Operations Console',
    user: {
      name: 'Aarav Mehta',
      email: 'aarav.mehta@processflow.io',
      title: 'Admin',
    },
    navigation: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: 'layoutDashboard',
        roles: ['admin'],
      },
      {
        id: 'workflows',
        label: 'Workflows',
        path: '/workflows',
        icon: 'workflow',
        roles: ['admin'],
      },
      {
        id: 'inbox',
        label: 'Inbox',
        path: '/inbox',
        icon: 'inbox',
        roles: ['admin'],
      },
      {
        id: 'requests',
        label: 'Requests',
        path: '/requests',
        icon: 'clipboardList',
        roles: ['admin'],
      },
      {
        id: 'users',
        label: 'Users',
        path: '/users',
        icon: 'users',
        roles: ['admin'],
      },
    ],
    footerActions: [
      {
        id: 'profile-settings',
        label: 'Profile Settings',
        icon: 'userCog',
        path: '/profile-settings',
        variant: 'default',
        roles: ['admin'],
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: 'settings',
        path: '/settings',
        variant: 'default',
        roles: ['admin'],
      },
      {
        id: 'logout',
        label: 'Logout',
        icon: 'logOut',
        variant: 'danger',
        roles: ['admin'],
      },
    ],
  },
};
