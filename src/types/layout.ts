import type { AppRole, RoleShellConfig, ThemeMode } from './app';

export type AppLayoutContextValue = {
  activeRole: AppRole;
  roleConfig: RoleShellConfig;
  theme: ThemeMode;
};
