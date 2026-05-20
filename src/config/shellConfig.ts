import type { AppRole, RoleShellConfig } from '../types/app';

export const activeRole: AppRole = 'admin';

export const roleShellConfig: Record<AppRole, RoleShellConfig> = {
  admin: {
    role: 'admin',

    workspaceName: 'FlowProcess',
    workspaceTagline: 'Workflow Automation Platform',

    user: {
      name: 'Aarav Mehta',
      email: 'aarav.mehta@flowprocess.io',
      title: 'System Administrator',
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
        id: 'templates',
        label: 'Templates',
        path: '/templates',
        icon: 'fileText',
        roles: ['admin'],

        children: [
          {
            id: 'email-templates',
            label: 'Email Templates',
            path: '/templates/email',
            icon: 'mail',
            roles: ['admin'],
          },

          {
            id: 'sms-templates',
            label: 'SMS Templates',
            path: '/templates/sms',
            icon: 'messageSquare',
            roles: ['admin'],
          },
        ],
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

      {
        id: 'roles-permissions',
        label: 'Roles & Permissions',
        path: '/roles-permissions',
        icon: 'shieldCheck',
        roles: ['admin'],
      },

      {
        id: 'audit-logs',
        label: 'Audit Logs',
        path: '/audit-logs',
        icon: 'history',
        roles: ['admin'],
      },

      {
        id: 'integrations',
        label: 'Integrations',
        path: '/integrations',
        icon: 'plug',
        roles: ['admin'],
      },

      {
        id: 'analytics',
        label: 'Analytics',
        path: '/analytics',
        icon: 'barChart3',
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
