import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Workflows', path: '/workflows' },
  { label: 'Inbox', path: '/inbox' },
  { label: 'Requests', path: '/requests' },
  { label: 'Users', path: '/users' },
  { label: 'Audit Logs', path: '/audit-logs' },
  { label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  return (
    <aside className='w-64 border-r bg-white p-4'>
      <h1 className='mb-8 text-2xl font-bold'>FlowProcess</h1>

      <nav className='space-y-2'>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 ${
                isActive ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
