import { TrendingDown, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppIcon } from '../../config/iconRegistry';
import type { KpiMetric, KpiTone } from '../../types/app';

type KpiCardProps = {
  metric: KpiMetric;
};

type ToneStyle = {
  panelColor: string;
  iconColor: string;
  trendColor: string;
};

const toneStyles: Record<KpiTone, ToneStyle> = {
  blue: {
    panelColor: 'var(--tone-blue-bg)',
    iconColor: 'var(--tone-blue-icon)',
    trendColor: 'var(--tone-blue-icon)',
  },
  emerald: {
    panelColor: 'var(--tone-emerald-bg)',
    iconColor: 'var(--tone-emerald-icon)',
    trendColor: 'var(--tone-emerald-icon)',
  },
  amber: {
    panelColor: 'var(--tone-amber-bg)',
    iconColor: 'var(--tone-amber-icon)',
    trendColor: 'var(--tone-amber-icon)',
  },
  rose: {
    panelColor: 'var(--tone-rose-bg)',
    iconColor: 'var(--tone-rose-icon)',
    trendColor: 'var(--tone-rose-icon)',
  },
};

const KpiCard = ({ metric }: KpiCardProps) => {
  const tone = toneStyles[metric.tone];

  return (
    <Link
      to={`/kpi/${metric.id}`}
      className='block rounded-2xl border border-(--app-border) bg-(--surface-primary) p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent-strong)'
    >
      <div className='mb-4 flex items-start justify-between gap-3'>
        <div>
          <p className='text-sm font-medium text-(--muted-text)'>{metric.label}</p>
          <p className='mt-2 text-3xl font-semibold text-(--app-text)'>{metric.value}</p>
        </div>

        <div
          className='flex size-10 items-center justify-center rounded-xl'
          style={{
            backgroundColor: tone.panelColor,
            color: tone.iconColor,
          }}
        >
          <AppIcon name={metric.icon} className='size-5' />
        </div>
      </div>

      <div
        className='inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium'
        style={{
          backgroundColor: tone.panelColor,
          color: tone.trendColor,
        }}
      >
        {metric.changeDirection === 'up' ? (
          <TrendingUp className='size-3.5' />
        ) : (
          <TrendingDown className='size-3.5' />
        )}
        {metric.change}
      </div>
    </Link>
  );
};

export default KpiCard;
