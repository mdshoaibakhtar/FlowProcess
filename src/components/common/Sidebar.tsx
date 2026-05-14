import { ClipboardList, Inbox, LayoutDashboard, type LucideIcon, Workflow, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MenuItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

const menuItems: MenuItem[] = [
  { label: 'Dashboard', path: '/', icon: LayoutDashboard },
  { label: 'Workflows', path: '/workflows', icon: Workflow },
  { label: 'Inbox', path: '/inbox', icon: Inbox },
  { label: 'Requests', path: '/requests', icon: ClipboardList },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
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
        className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[85vw] border-r border-slate-200 bg-white p-5 shadow-xl transition-transform duration-300 md:static md:z-auto md:w-64 md:max-w-none md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label='Sidebar Navigation'
      >
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>
              Workspace
            </p>
            <h1 className='mt-1 text-xl font-semibold text-slate-900'>Processflow</h1>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 md:hidden'
            aria-label='Close sidebar'
          >
            <X className='size-5' />
          </button>
        </div>

        <nav className='space-y-1'>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                <Icon className='size-4 shrink-0' />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
