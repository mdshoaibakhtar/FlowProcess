import { Menu, MoonStar, Sun } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import type { ThemeMode, UserProfile } from '../../types/app';

type HeaderProps = {
  currentUser: UserProfile;
  currentTheme: ThemeMode;
  onMenuClick: () => void;
  onToggleTheme: () => void;
};

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/workflows': 'Workflows',
  '/inbox': 'Inbox',
  '/requests': 'Requests',
  '/users': 'Users',
  '/settings': 'Settings',
  '/profile-settings': 'Profile Settings',
};

const Header = ({ currentUser, currentTheme, onMenuClick, onToggleTheme }: HeaderProps) => {
  const { pathname } = useLocation();
  const currentTitle = pathname.startsWith('/kpi/')
    ? 'KPI Details'
    : (pageTitles[pathname] ?? 'Processflow');

  return (
    <header className='sticky top-0 z-20 border-b border-(--app-border) bg-(--surface-primary)/95 backdrop-blur'>
      <div className='flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onMenuClick}
            className='rounded-lg p-2 text-(--muted-text) transition hover:bg-(--surface-muted) hover:text-(--app-text) md:hidden'
            aria-label='Open sidebar'
          >
            <Menu className='size-5' />
          </button>

          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-(--muted-text)'>
              {currentUser.title}
            </p>
            <h2 className='text-base font-semibold text-(--app-text) sm:text-lg'>{currentTitle}</h2>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onToggleTheme}
            className='inline-flex items-center justify-center rounded-lg border border-(--app-border) bg-(--surface-secondary) p-2 text-(--muted-text) transition hover:text-(--app-text)'
            aria-label='Toggle theme'
            title={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {currentTheme === 'light' ? (
              <MoonStar className='size-4' />
            ) : (
              <Sun className='size-4' />
            )}
          </button>

          <div className='hidden text-right sm:block'>
            <p className='text-sm font-semibold text-(--app-text)'>{currentUser.name}</p>
            <p className='text-xs text-(--muted-text)'>{currentUser.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
