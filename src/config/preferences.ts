import type { AppPreferences } from '../types/app';

export const PREFERENCES_STORAGE_KEY = 'processflow-preferences';

export const defaultPreferences: AppPreferences = {
  mode: 'light',
  accentColor: 'blue',
  fontFamily: 'inter',
  defaultTrendChartType: 'line',
  defaultStatusChartType: 'doughnut',
  defaultKpiChartType: 'line',
  language: 'en',
};
