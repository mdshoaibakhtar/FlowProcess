import { ChevronLeft, ChevronRight } from 'lucide-react';
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
}: SidebarProps) => {
  const navigationItems = roleConfig.navigation.filter((item) =>
    item.roles.includes(roleConfig.role),
  );
  const footerActions = roleConfig.footerActions.filter((item) =>
    item.roles.includes(roleConfig.role),
  );
  const userInitials = getInitials(roleConfig.user.name);

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
        className={`fixed inset-y-0 left-0 z-40 flex h-full w-72 max-w-[85vw] flex-col border-r border-(--app-border) bg-(--surface-primary) px-3 py-4 shadow-xl transition-[width,transform] duration-300 md:max-w-none md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'md:w-20' : 'md:w-72'}`}
        aria-label='Sidebar Navigation'
      >
        <button
          type='button'
          onClick={onToggleCollapse}
          className='absolute -right-3 top-10 z-20 hidden size-6 items-center justify-center rounded-full border border-(--app-border) bg-(--surface-primary) text-(--muted-text) shadow-sm transition hover:bg-(--surface-secondary) hover:text-(--app-text) md:inline-flex cursor-pointer'
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className='size-4' /> : <ChevronLeft className='size-4' />}
        </button>

        <div
          className={`mb-6 flex h-14 items-center ${isCollapsed ? 'justify-center w-full' : 'justify-start px-2'}`}
        >
          <div>
            {isCollapsed ? (
              <div className='flex size-14 items-center justify-center rounded-xl bg-(--accent-soft) text-sm font-semibold text-(--accent-strong)'>
                {roleConfig.workspaceName.slice(0, 2).toUpperCase()}
              </div>
            ) : (
              <>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-(--muted-text)'>
                  {roleConfig.workspaceTagline}
                </p>
                <h1 className='mt-1 text-xl font-semibold text-(--app-text)'>
                  {roleConfig.workspaceName}
                </h1>
              </>
            )}
          </div>

          <div className='flex items-center'>
            <button
              type='button'
              onClick={onClose}
              className='rounded-lg p-2 text-(--muted-text) transition hover:bg-(--surface-muted) hover:text-(--app-text) md:hidden'
              aria-label='Close sidebar'
            >
              <ChevronLeft className='size-4' />
            </button>
          </div>
        </div>

        <nav className='space-y-1'>
          {navigationItems.map((item: NavigationItem) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              title={isCollapsed ? item.label : undefined}
              className={({ isActive }) =>
                `group flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-(--accent-soft) text-(--accent-strong)'
                    : 'text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)'
                }`
              }
            >
              <AppIcon name={item.icon} className='size-4 shrink-0' />
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className='mt-auto border-t border-(--app-border) pt-4'>
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

          <div className='space-y-1'>
            {footerActions.map((action: FooterAction) => {
              const sharedClassName = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                action.variant === 'danger'
                  ? 'text-(--danger-strong) hover:bg-(--danger-soft) hover:text-(--danger-strong)'
                  : 'text-(--muted-text) hover:bg-(--surface-muted) hover:text-(--app-text)'
              }`;

              if (action.path) {
                return (
                  <NavLink
                    key={action.id}
                    to={action.path}
                    onClick={onClose}
                    title={isCollapsed ? action.label : undefined}
                    className={({ isActive }) =>
                      `${isCollapsed ? 'justify-center' : 'justify-start'} ${sharedClassName} ${
                        isActive ? 'bg-(--accent-soft) text-(--accent-strong)' : ''
                      }`
                    }
                  >
                    <AppIcon name={action.icon} className='size-4 shrink-0' />
                    {!isCollapsed && <span>{action.label}</span>}
                  </NavLink>
                );
              }

              return (
                <button
                  key={action.id}
                  type='button'
                  onClick={onLogout}
                  title={isCollapsed ? action.label : undefined}
                  className={`${sharedClassName} flex w-full ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                >
                  <AppIcon name={action.icon} className='size-4 shrink-0' />
                  {!isCollapsed && <span>{action.label}</span>}
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
