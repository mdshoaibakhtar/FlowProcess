import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { activeRole, roleShellConfig } from '../config/shellConfig';
import type { ThemeMode } from '../types/app';
import type { AppLayoutContextValue } from '../types/layout';

const THEME_STORAGE_KEY = 'processflow-theme';
const SIDEBAR_STORAGE_KEY = 'processflow-sidebar-collapsed';

const readInitialTheme = (): ThemeMode => {
  const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (cachedTheme === 'light' || cachedTheme === 'dark') {
    return cachedTheme;
  }

  return 'light';
};

const readInitialSidebarState = () => localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';

const AppLayout = () => {
  const roleConfig = roleShellConfig[activeRole];
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(readInitialSidebarState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    root.classList.add('theme-transitioning');
    const timeoutId = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  const handleLogout = () => {
    window.alert('Logout action triggered. Connect this to your auth service.');
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const layoutContext: AppLayoutContextValue = {
    activeRole,
    roleConfig,
    theme,
  };

  return (
    <div className='relative min-h-screen bg-(--app-bg) text-(--app-text) transition-colors'>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        roleConfig={roleConfig}
        onClose={() => setIsSidebarOpen(false)}
        onToggleCollapse={() => setIsSidebarCollapsed((currentState) => !currentState)}
        onLogout={handleLogout}
      />

      <div
        className={`flex min-h-screen min-w-0 flex-col transition-[padding] duration-300 ${
          isSidebarCollapsed ? 'md:pl-20' : 'md:pl-72'
        }`}
      >
        <Header
          currentUser={roleConfig.user}
          currentTheme={theme}
          onMenuClick={() => setIsSidebarOpen(true)}
          onToggleTheme={toggleTheme}
        />

        <main className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8'>
          <Outlet context={layoutContext} />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
