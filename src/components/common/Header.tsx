import { Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

type HeaderProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/workflows': 'Workflows',
  '/inbox': 'Inbox',
  '/requests': 'Requests',
};

const Header = ({ onMenuClick }: HeaderProps) => {
  const { pathname } = useLocation();
  const currentTitle = pageTitles[pathname] ?? 'FlowProcess';

  return (
    <header className='sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur'>
      <div className='flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={onMenuClick}
            className='rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 md:hidden'
            aria-label='Open sidebar'
          >
            <Menu className='size-5' />
          </button>

          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
              Processflow
            </p>
            <h2 className='text-base font-semibold text-slate-900 sm:text-lg'>{currentTitle}</h2>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white sm:px-4 sm:text-sm'>
            Admin
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
