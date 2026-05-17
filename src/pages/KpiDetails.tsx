import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { ArrowLeft } from 'lucide-react';
import { useMemo } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Link, useParams } from 'react-router-dom';
import { AppIcon } from '../config/iconRegistry';
import { roleDashboardConfig } from '../config/dashboardConfig';
import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
);

const fallbackHistory = {
  title: 'KPI History',
  labels: ['No Data'],
  values: [0],
  borderColor: '#3b82f6',
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
};

const KpiDetails = () => {
  const { kpiId } = useParams();
  const { activeRole, theme, preferences, t } = useAppLayoutContext();
  const dashboard = roleDashboardConfig[activeRole];
  const kpi = dashboard.kpis.find((item) => item.id === kpiId);
  const chartType = preferences.defaultKpiChartType;

  const history = kpi?.history ?? fallbackHistory;
  const axisColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  const gridColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.26)';

  const lineData = useMemo<ChartData<'line'>>(
    () => ({
      labels: history.labels,
      datasets: [
        {
          label: kpi?.label ?? 'KPI',
          data: history.values,
          borderColor: history.borderColor,
          backgroundColor: history.backgroundColor,
          fill: true,
          tension: 0.35,
          pointRadius: 3,
          pointHoverRadius: 5,
        },
      ],
    }),
    [history.backgroundColor, history.borderColor, history.labels, history.values, kpi?.label],
  );

  const barData = useMemo<ChartData<'bar'>>(
    () => ({
      labels: history.labels,
      datasets: [
        {
          label: kpi?.label ?? 'KPI',
          data: history.values,
          borderColor: history.borderColor,
          backgroundColor: history.backgroundColor,
          borderRadius: 8,
        },
      ],
    }),
    [history.backgroundColor, history.borderColor, history.labels, history.values, kpi?.label],
  );

  const lineOptions = useMemo<ChartOptions<'line'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: axisColor,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
        },
        y: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
          beginAtZero: true,
        },
      },
    }),
    [axisColor, gridColor],
  );

  const barOptions = useMemo<ChartOptions<'bar'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: axisColor,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
        },
        y: {
          ticks: { color: axisColor },
          grid: { color: gridColor },
          beginAtZero: true,
        },
      },
    }),
    [axisColor, gridColor],
  );

  if (!kpi) {
    return (
      <div className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6'>
        <h1 className='text-2xl font-semibold text-(--app-text)'>{t('kpi_not_found_title')}</h1>
        <p className='mt-2 text-(--muted-text)'>{t('kpi_not_found_description')}</p>
        <Link
          to='/'
          className='mt-4 inline-flex items-center gap-2 rounded-lg border border-(--app-border) bg-(--surface-secondary) px-3 py-2 text-sm text-(--app-text)'
        >
          <ArrowLeft className='size-4' />
          {t('back_to_dashboard')}
        </Link>
      </div>
    );
  }

  return (
    <div className='space-y-5'>
      <div>
        <Link
          to='/'
          className='inline-flex items-center gap-2 rounded-lg border border-(--app-border) bg-(--surface-secondary) px-3 py-2 text-sm font-medium text-(--app-text) transition hover:bg-(--surface-muted)'
        >
          <ArrowLeft className='size-4' />
          {t('back_to_dashboard')}
        </Link>
      </div>

      <section className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-6 shadow-sm'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <h1 className='text-2xl font-semibold text-(--app-text)'>{kpi.label}</h1>
            <p className='mt-2 text-(--muted-text)'>{kpi.description}</p>
          </div>

          <div className='flex size-11 items-center justify-center rounded-xl bg-(--accent-soft) text-(--accent-strong)'>
            <AppIcon name={kpi.icon} className='size-5' />
          </div>
        </div>

        <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2'>
          <div className='rounded-xl border border-(--app-border) bg-(--surface-secondary) p-4'>
            <p className='text-sm text-(--muted-text)'>{t('kpi_current_value')}</p>
            <p className='mt-1 text-3xl font-semibold text-(--app-text)'>{kpi.value}</p>
          </div>
          <div className='rounded-xl border border-(--app-border) bg-(--surface-secondary) p-4'>
            <p className='text-sm text-(--muted-text)'>{t('kpi_recent_change')}</p>
            <p className='mt-1 text-2xl font-semibold text-(--app-text)'>{kpi.change}</p>
          </div>
        </div>
      </section>

      <section className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5 shadow-sm'>
        <h2 className='text-lg font-semibold text-(--app-text)'>{kpi.history.title}</h2>
        <p className='mt-1 text-sm text-(--muted-text)'>{t('kpi_history_description')}</p>

        <div className='mt-5 h-80'>
          {chartType === 'line' ? (
            <Line data={lineData} options={lineOptions} />
          ) : (
            <Bar data={barData} options={barOptions} />
          )}
        </div>
      </section>
    </div>
  );
};

export default KpiDetails;
