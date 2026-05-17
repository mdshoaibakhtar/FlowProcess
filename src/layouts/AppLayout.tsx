import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import { translate } from '../config/i18n';
import { defaultPreferences, PREFERENCES_STORAGE_KEY } from '../config/preferences';
import { activeRole, roleShellConfig } from '../config/shellConfig';
import type { AppPreferences } from '../types/app';
import type { AppLayoutContextValue } from '../types/layout';

const SIDEBAR_STORAGE_KEY = 'processflow-sidebar-collapsed';

const readInitialPreferences = (): AppPreferences => {
  const cachedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);

  if (!cachedPreferences) {
    return defaultPreferences;
  }

  try {
    const parsedPreferences = JSON.parse(cachedPreferences) as Partial<AppPreferences>;

    return {
      ...defaultPreferences,
      ...parsedPreferences,
    };
  } catch {
    return defaultPreferences;
  }
};

const readInitialSidebarState = () => localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';

const AppLayout = () => {
  const roleConfig = roleShellConfig[activeRole];
  const [preferences, setPreferences] = useState<AppPreferences>(readInitialPreferences);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(readInitialSidebarState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = preferences.mode;
    root.dataset.accent = preferences.accentColor;
    root.dataset.font = preferences.fontFamily;
    root.lang = preferences.language;
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));

    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    root.classList.add('theme-transitioning');
    const timeoutId = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [preferences]);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  const updatePreferences = useCallback((updates: Partial<AppPreferences>) => {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      ...updates,
    }));
  }, []);

  const handleLogout = useCallback(() => {
    window.alert(translate(preferences.language, 'logout_alert'));
  }, [preferences.language]);

  const toggleTheme = () => {
    updatePreferences({
      mode: preferences.mode === 'light' ? 'dark' : 'light',
    });
  };

  const t = useCallback(
    (key: string) => translate(preferences.language, key),
    [preferences.language],
  );

  const layoutContext: AppLayoutContextValue = useMemo(
    () => ({
      activeRole,
      roleConfig,
      theme: preferences.mode,
      preferences,
      updatePreferences,
      t,
    }),
    [preferences, roleConfig, t, updatePreferences],
  );

  return (
    <div className='relative min-h-screen bg-(--app-bg) text-(--app-text) transition-colors'>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        roleConfig={roleConfig}
        onClose={() => setIsSidebarOpen(false)}
        onToggleCollapse={() => setIsSidebarCollapsed((currentState) => !currentState)}
        onLogout={handleLogout}
        t={t}
      />

      <div
        className={`flex min-h-screen min-w-0 flex-col transition-[padding] duration-300 ${
          isSidebarCollapsed ? 'md:pl-20' : 'md:pl-72'
        }`}
      >
        <Header
          currentUser={roleConfig.user}
          currentTheme={preferences.mode}
          onMenuClick={() => setIsSidebarOpen(true)}
          onToggleTheme={toggleTheme}
          t={t}
        />

        <main className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8'>
          <Outlet context={layoutContext} />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
