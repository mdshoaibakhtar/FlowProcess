import { Menu, MoonStar, Sun } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import type { ThemeMode, UserProfile } from '../../types/app';

type HeaderProps = {
  currentUser: UserProfile;
  currentTheme: ThemeMode;
  onMenuClick: () => void;
  onToggleTheme: () => void;
  t: (key: string) => string;
};

const pageTitleKeyMap: Record<string, string> = {
  '/': 'page_dashboard',
  '/workflows': 'page_workflows',
  '/inbox': 'page_inbox',
  '/requests': 'page_requests',
  '/users': 'page_users',
  '/settings': 'page_settings',
  '/profile-settings': 'page_profile_settings',
};

const Header = ({ currentUser, currentTheme, onMenuClick, onToggleTheme, t }: HeaderProps) => {
  const { pathname } = useLocation();
  const currentTitle = pathname.startsWith('/kpi/')
    ? t('page_kpi_details')
    : t(pageTitleKeyMap[pathname] ?? 'app_name');

  return (
    <header className='sticky top-0 z-20 border-b border-(--app-border) bg-(--surface-primary)/95 backdrop-blur'>
      <div className='flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onMenuClick}
            className='cursor-pointer rounded-lg p-2 text-(--muted-text) transition hover:bg-(--surface-muted) hover:text-(--app-text) md:hidden'
            aria-label='Open sidebar'
          >
            <Menu className='size-5' />
          </button>

          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-(--muted-text)'>
              {currentUser.title === 'Admin' ? t('role_admin') : currentUser.title}
            </p>
            <h2 className='text-base font-semibold text-(--app-text) sm:text-lg'>{currentTitle}</h2>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onToggleTheme}
            className='inline-flex cursor-pointer items-center justify-center rounded-lg border border-(--app-border) bg-(--surface-secondary) p-2 text-(--muted-text) transition hover:text-(--app-text)'
            aria-label={t('toggle_theme')}
            title={currentTheme === 'light' ? t('switch_dark') : t('switch_light')}
          >
            {currentTheme === 'light' ? (
              <MoonStar className='size-4' />
            ) : (
              <Sun className='size-4' />
            )}
          </button>

          <div className='hidden text-start sm:block'>
            <p className='text-sm font-semibold text-(--app-text)'>{currentUser.name}</p>
            <p className='text-xs text-(--muted-text)'>{currentUser.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
