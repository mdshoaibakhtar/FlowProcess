import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppIcon } from '../../config/iconRegistry';
import type { FooterAction, NavigationItem, RoleShellConfig } from '../../types/app';

type SidebarProps = {
  isOpen: boolean;
  isCollapsed: boolean;
  roleConfig: RoleShellConfig;
  onClose: () => void;
  onToggleCollapse: () => void;
  onLogout: () => void;
  t: (key: string) => string;
};

const navLabelKeyMap: Record<string, string> = {
  dashboard: 'nav_dashboard',
  workflows: 'nav_workflows',
  templates: 'nav_templates',
  inbox: 'nav_inbox',
  requests: 'nav_requests',
  users: 'nav_users',
  analytics: 'nav_analytics',
  integrations: 'nav_integrations',
};

const actionLabelKeyMap: Record<string, string> = {
  'profile-settings': 'action_profile_settings',
  settings: 'action_settings',
  logout: 'action_logout',
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
};

const Sidebar = ({
  isOpen,
  isCollapsed,
  roleConfig,
  onClose,
  onToggleCollapse,
  onLogout,
  t,
}: SidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    templates: true,
  });

  const navigationItems = roleConfig.navigation.filter((item) =>
    item.roles.includes(roleConfig.role),
  );

  const footerActions = roleConfig.footerActions.filter((item) =>
    item.roles.includes(roleConfig.role),
  );

  const userInitials = getInitials(roleConfig.user.name);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/40 backdrop-blur-sm transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden='true'
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full max-w-[85vw] flex-col border-r border-(--app-border) bg-(--surface-primary) px-3 py-4 shadow-xl transition-[width,transform] duration-300 md:max-w-none md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'w-20' : 'w-72'}`}
        aria-label='Sidebar Navigation'
      >
        {/* Collapse Button */}
        <button
          type='button'
          onClick={onToggleCollapse}
          className='absolute -right-3 top-10 z-20 hidden size-6 cursor-pointer items-center justify-center rounded-full border border-(--app-border) bg-(--surface-primary) text-(--muted-text) shadow-sm transition hover:bg-(--surface-secondary) hover:text-(--app-text) md:inline-flex'
        >
          {isCollapsed ? <ChevronRight className='size-4' /> : <ChevronLeft className='size-4' />}
        </button>

        {/* Header */}
        <div
          className={`mb-6 flex h-14 items-center ${
            isCollapsed ? 'justify-center' : 'justify-between px-2'
          }`}
        >
          {isCollapsed ? (
            <div className='flex size-12 items-center justify-center rounded-xl bg-(--accent-soft) text-sm font-semibold text-(--accent-strong)'>
              {roleConfig.workspaceName.slice(0, 2).toUpperCase()}
            </div>
          ) : (
            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-(--muted-text)'>
                {roleConfig.workspaceTagline}
              </p>

              <h1 className='mt-1 text-xl font-semibold text-(--app-text)'>
                {roleConfig.workspaceName}
              </h1>
            </div>
          )}

          <button
            type='button'
            onClick={onClose}
            className='rounded-lg p-2 text-(--muted-text) transition hover:bg-(--surface-muted) hover:text-(--app-text) md:hidden'
          >
            <ChevronLeft className='size-4' />
          </button>
        </div>

        {/* Navigation */}
        <nav className='space-y-1 overflow-y-auto'>
          {navigationItems.map((item: NavigationItem) => {
            const hasChildren = !!item.children?.length;

            if (hasChildren) {
              return (
                <div key={item.id} className='space-y-1'>
                  <button
                    type='button'
                    onClick={() => toggleMenu(item.id)}
                    className={`flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isCollapsed ? 'justify-center' : 'justify-between'
                    } text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)`}
                  >
                    <div className='flex items-center gap-3'>
                      <AppIcon name={item.icon} className='size-4 shrink-0' />

                      {!isCollapsed && <span>{t(navLabelKeyMap[item.id] ?? item.label)}</span>}
                    </div>

                    {!isCollapsed && (
                      <ChevronDown
                        className={`size-4 transition-transform ${
                          expandedMenus[item.id] ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {!isCollapsed && expandedMenus[item.id] && (
                    <div className='ml-5 space-y-1 border-l border-(--app-border) pl-3'>
                      {item.children?.map((child) => (
                        <NavLink
                          key={child.id}
                          to={child.path}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                              isActive
                                ? 'bg-(--accent-soft) text-(--accent-strong)'
                                : 'text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)'
                            }`
                          }
                        >
                          <AppIcon name={child.icon} className='size-4 shrink-0' />

                          <span>{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                title={isCollapsed ? item.label : undefined}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  } ${
                    isActive
                      ? 'bg-(--accent-soft) text-(--accent-strong)'
                      : 'text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)'
                  }`
                }
              >
                <AppIcon name={item.icon} className='size-4 shrink-0' />

                {!isCollapsed && <span>{t(navLabelKeyMap[item.id] ?? item.label)}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className='mt-auto border-t border-(--app-border) pt-4'>
          {/* User Card */}
          <div
            className='mb-4 flex items-center gap-3 rounded-xl border border-(--app-border) bg-(--surface-secondary) p-2.5'
            title={isCollapsed ? roleConfig.user.name : undefined}
          >
            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-(--accent-soft) text-xs font-semibold text-(--accent-strong)'>
              {userInitials}
            </div>

            {!isCollapsed && (
              <div className='min-w-0'>
                <p className='truncate text-sm font-semibold text-(--app-text)'>
                  {roleConfig.user.name}
                </p>

                <p className='truncate text-xs text-(--muted-text)'>{roleConfig.user.email}</p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className='space-y-1'>
            {footerActions.map((action: FooterAction) => {
              const sharedClassName = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                action.variant === 'danger'
                  ? 'text-(--danger-strong) hover:bg-(--danger-soft)'
                  : 'text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)'
              }`;

              if (action.path) {
                return (
                  <NavLink
                    key={action.id}
                    to={action.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `${sharedClassName} ${
                        isCollapsed ? 'justify-center' : 'justify-start'
                      } ${isActive ? 'bg-(--accent-soft) text-(--accent-strong)' : ''}`
                    }
                  >
                    <AppIcon name={action.icon} className='size-4 shrink-0' />

                    {!isCollapsed && <span>{t(actionLabelKeyMap[action.id] ?? action.label)}</span>}
                  </NavLink>
                );
              }

              return (
                <button
                  key={action.id}
                  type='button'
                  onClick={onLogout}
                  className={`${sharedClassName} flex w-full ${
                    isCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                >
                  <AppIcon name={action.icon} className='size-4 shrink-0' />

                  {!isCollapsed && <span>{t(actionLabelKeyMap[action.id] ?? action.label)}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
