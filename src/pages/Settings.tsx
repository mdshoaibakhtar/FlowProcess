import type {
  AccentColor,
  AppLanguage,
  FontFamilyOption,
  StatusChartType,
  ThemeMode,
  TrendChartType,
} from '../types/app';
import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

const accentSwatches: Record<AccentColor, string> = {
  blue: '#2563eb',
  emerald: '#059669',
  amber: '#d97706',
  rose: '#e11d48',
  violet: '#7c3aed',
};

const Settings = () => {
  const { preferences, updatePreferences, t } = useAppLayoutContext();

  const modeOptions: ThemeMode[] = ['light', 'dark'];
  const accentOptions: AccentColor[] = ['blue', 'emerald', 'amber', 'rose', 'violet'];
  const fontOptions: FontFamilyOption[] = ['inter', 'modern', 'classic', 'mono'];
  const trendChartOptions: TrendChartType[] = ['line', 'bar'];
  const statusChartOptions: StatusChartType[] = ['doughnut', 'pie'];
  const languageOptions: AppLanguage[] = ['en', 'hi'];

  return (
    <div className='space-y-6'>
      <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
        <h1 className='text-2xl font-semibold text-(--app-text)'>{t('settings_title')}</h1>
        <p className='mt-2 text-(--muted-text)'>{t('settings_subtitle')}</p>
      </div>

      <section className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5'>
          <h2 className='text-lg font-semibold text-(--app-text)'>{t('settings_appearance')}</h2>

          <div className='mt-4 space-y-4'>
            <label className='block'>
              <span className='text-sm font-medium text-(--muted-text)'>
                {t('settings_mode_label')}
              </span>
              <select
                value={preferences.mode}
                onChange={(event) =>
                  updatePreferences({
                    mode: event.target.value as ThemeMode,
                  })
                }
                className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
              >
                {modeOptions.map((mode) => (
                  <option key={mode} value={mode}>
                    {t(`mode_${mode}`)}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <p className='text-sm font-medium text-(--muted-text)'>
                {t('settings_theme_color_label')}
              </p>
              <div className='mt-2 flex flex-wrap gap-2'>
                {accentOptions.map((accent) => (
                  <button
                    key={accent}
                    type='button'
                    onClick={() => updatePreferences({ accentColor: accent })}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                      preferences.accentColor === accent
                        ? 'border-(--accent-strong) bg-(--accent-soft) text-(--accent-strong)'
                        : 'border-(--app-border) bg-(--surface-secondary) text-(--app-text)'
                    }`}
                  >
                    <span
                      className='inline-block size-3 rounded-full'
                      style={{ backgroundColor: accentSwatches[accent] }}
                    />
                    {t(`accent_${accent}`)}
                  </button>
                ))}
              </div>
            </div>

            <label className='block'>
              <span className='text-sm font-medium text-(--muted-text)'>
                {t('settings_font_label')}
              </span>
              <select
                value={preferences.fontFamily}
                onChange={(event) =>
                  updatePreferences({
                    fontFamily: event.target.value as FontFamilyOption,
                  })
                }
                className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
              >
                {fontOptions.map((font) => (
                  <option key={font} value={font}>
                    {t(`font_${font}`)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </article>

        <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5'>
          <h2 className='text-lg font-semibold text-(--app-text)'>{t('settings_charts')}</h2>

          <div className='mt-4 space-y-4'>
            <label className='block'>
              <span className='text-sm font-medium text-(--muted-text)'>
                {t('settings_default_trend_chart_label')}
              </span>
              <select
                value={preferences.defaultTrendChartType}
                onChange={(event) =>
                  updatePreferences({
                    defaultTrendChartType: event.target.value as TrendChartType,
                  })
                }
                className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
              >
                {trendChartOptions.map((chartType) => (
                  <option key={chartType} value={chartType}>
                    {t(`chart_${chartType}`)}
                  </option>
                ))}
              </select>
            </label>

            <label className='block'>
              <span className='text-sm font-medium text-(--muted-text)'>
                {t('settings_default_status_chart_label')}
              </span>
              <select
                value={preferences.defaultStatusChartType}
                onChange={(event) =>
                  updatePreferences({
                    defaultStatusChartType: event.target.value as StatusChartType,
                  })
                }
                className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
              >
                {statusChartOptions.map((chartType) => (
                  <option key={chartType} value={chartType}>
                    {t(`chart_${chartType}`)}
                  </option>
                ))}
              </select>
            </label>

            <label className='block'>
              <span className='text-sm font-medium text-(--muted-text)'>
                {t('settings_default_kpi_chart_label')}
              </span>
              <select
                value={preferences.defaultKpiChartType}
                onChange={(event) =>
                  updatePreferences({
                    defaultKpiChartType: event.target.value as TrendChartType,
                  })
                }
                className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
              >
                {trendChartOptions.map((chartType) => (
                  <option key={chartType} value={chartType}>
                    {t(`chart_${chartType}`)}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </article>
      </section>

      <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5'>
        <h2 className='text-lg font-semibold text-(--app-text)'>{t('settings_localization')}</h2>

        <div className='mt-4 max-w-md'>
          <label className='block'>
            <span className='text-sm font-medium text-(--muted-text)'>
              {t('settings_language_label')}
            </span>
            <select
              value={preferences.language}
              onChange={(event) =>
                updatePreferences({
                  language: event.target.value as AppLanguage,
                })
              }
              className='mt-1 w-full rounded-xl border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
            >
              {languageOptions.map((language) => (
                <option key={language} value={language}>
                  {t(`language_${language}`)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className='mt-4 text-sm text-(--muted-text)'>{t('settings_hint')}</p>
      </article>
    </div>
  );
};

export default Settings;
