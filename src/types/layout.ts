import type { AppPreferences, AppRole, RoleShellConfig, ThemeMode } from './app';

export type AppLayoutContextValue = {
  activeRole: AppRole;
  roleConfig: RoleShellConfig;
  theme: ThemeMode;
  preferences: AppPreferences;
  updatePreferences: (updates: Partial<AppPreferences>) => void;
  t: (key: string) => string;
};
