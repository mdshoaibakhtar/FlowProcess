import {
  ArcElement,
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
import { useMemo } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import KpiCard from '../components/dashboard/KpiCard';
import { roleDashboardConfig } from '../config/dashboardConfig';
import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
  Filler,
);

const Dashboard = () => {
  const { activeRole, theme, preferences } = useAppLayoutContext();
  const dashboard = roleDashboardConfig[activeRole];
  const trendChartType = preferences.defaultTrendChartType;
  const statusChartType = preferences.defaultStatusChartType;

  const axisColor = theme === 'dark' ? '#cbd5e1' : '#475569';
  const gridColor = theme === 'dark' ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.26)';

  const trendLineData = useMemo<ChartData<'line'>>(
    () => ({
      labels: dashboard.trendChart.labels,
      datasets: dashboard.trendChart.series.map((series) => ({
        label: series.label,
        data: series.data,
        borderColor: series.borderColor,
        backgroundColor: series.backgroundColor,
        fill: true,
        tension: 0.35,
        pointRadius: 3,
        pointHoverRadius: 5,
      })),
    }),
    [dashboard.trendChart.labels, dashboard.trendChart.series],
  );

  const trendBarData = useMemo<ChartData<'bar'>>(
    () => ({
      labels: dashboard.trendChart.labels,
      datasets: dashboard.trendChart.series.map((series) => ({
        label: series.label,
        data: series.data,
        borderColor: series.borderColor,
        backgroundColor: series.backgroundColor,
        borderRadius: 8,
      })),
    }),
    [dashboard.trendChart.labels, dashboard.trendChart.series],
  );

  const trendLineOptions = useMemo<ChartOptions<'line'>>(
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

  const trendBarOptions = useMemo<ChartOptions<'bar'>>(
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

  const workloadData = useMemo<ChartData<'bar'>>(
    () => ({
      labels: dashboard.workloadChart.labels,
      datasets: dashboard.workloadChart.series.map((series) => ({
        label: series.label,
        data: series.data,
        borderRadius: 8,
        backgroundColor: series.backgroundColor,
      })),
    }),
    [dashboard.workloadChart.labels, dashboard.workloadChart.series],
  );

  const workloadOptions = useMemo<ChartOptions<'bar'>>(
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

  const statusDoughnutData = useMemo<ChartData<'doughnut'>>(
    () => ({
      labels: dashboard.statusChart.labels,
      datasets: [
        {
          data: dashboard.statusChart.data,
          backgroundColor: dashboard.statusChart.colors,
          borderWidth: 0,
        },
      ],
    }),
    [dashboard.statusChart.colors, dashboard.statusChart.data, dashboard.statusChart.labels],
  );

  const statusPieData = useMemo<ChartData<'pie'>>(
    () => ({
      labels: dashboard.statusChart.labels,
      datasets: [
        {
          data: dashboard.statusChart.data,
          backgroundColor: dashboard.statusChart.colors,
          borderWidth: 0,
        },
      ],
    }),
    [dashboard.statusChart.colors, dashboard.statusChart.data, dashboard.statusChart.labels],
  );

  const statusDoughnutOptions = useMemo<ChartOptions<'doughnut'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: axisColor,
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
      },
      cutout: '68%',
    }),
    [axisColor],
  );

  const statusPieOptions = useMemo<ChartOptions<'pie'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: axisColor,
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
      },
    }),
    [axisColor],
  );

  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-semibold text-(--app-text) sm:text-3xl'>{dashboard.title}</h1>
        <p className='mt-2 text-sm text-(--muted-text) sm:text-base'>{dashboard.subtitle}</p>
      </div>

      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {dashboard.kpis.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </section>

      <section className='grid grid-cols-1 gap-4 xl:grid-cols-3'>
        <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5 shadow-sm xl:col-span-2'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <div>
              <h2 className='text-lg font-semibold text-(--app-text)'>
                {dashboard.trendChart.title}
              </h2>
              <p className='mt-1 text-sm text-(--muted-text)'>{dashboard.trendChart.description}</p>
            </div>
          </div>

          <div className='mt-5 h-80'>
            {trendChartType === 'line' ? (
              <Line data={trendLineData} options={trendLineOptions} />
            ) : (
              <Bar data={trendBarData} options={trendBarOptions} />
            )}
          </div>
        </article>

        <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5 shadow-sm'>
          <div>
            <div>
              <h2 className='text-lg font-semibold text-(--app-text)'>
                {dashboard.statusChart.title}
              </h2>
              <p className='mt-1 text-sm text-(--muted-text)'>
                {dashboard.statusChart.description}
              </p>
            </div>
          </div>

          <div className='mt-5 h-80'>
            {statusChartType === 'doughnut' ? (
              <Doughnut data={statusDoughnutData} options={statusDoughnutOptions} />
            ) : (
              <Pie data={statusPieData} options={statusPieOptions} />
            )}
          </div>
        </article>
      </section>

      <section>
        <article className='rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5 shadow-sm'>
          <h2 className='text-lg font-semibold text-(--app-text)'>
            {dashboard.workloadChart.title}
          </h2>
          <p className='mt-1 text-sm text-(--muted-text)'>{dashboard.workloadChart.description}</p>

          <div className='mt-5 h-80'>
            <Bar data={workloadData} options={workloadOptions} />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
