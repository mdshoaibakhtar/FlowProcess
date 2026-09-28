import { useState } from 'react';
import type { Integration } from '../../types';

interface IntegrationCardProps {
  integration: Integration;
  onClick?: (integration: Integration) => void;
}

/** Falls back to the company's initial if the logo image fails to load. */
export const IntegrationLogo = ({ integration }: { integration: Integration }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-medium text-slate-500'>
        {integration.name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={integration.logoUrl}
      alt={`${integration.name} logo`}
      className='h-10 w-10 shrink-0 rounded-lg object-contain'
      onError={() => setFailed(true)}
    />
  );
};

export const IntegrationCard = ({ integration, onClick }: IntegrationCardProps) => {
  const { name, description, note, status } = integration;
  const isConnected = status === 'connected';

  return (
    <div className='flex flex-col w-[32%] justify-between rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-sm'>
      <div className='flex items-start justify-between gap-3'>
        <IntegrationLogo integration={integration} />
        {status && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
              isConnected ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
            }`}
          >
            {isConnected ? 'Connected' : 'Not connected'}
          </span>
        )}
      </div>

      <div className='mt-3 space-y-1'>
        <p className='text-sm font-semibold text-slate-800'>{name}</p>
        <p className='text-sm leading-relaxed text-slate-500'>{description}</p>
        {note && <p className='text-xs text-slate-400'>{note}</p>}
      </div>

      <button
        onClick={() => onClick?.(integration)}
        className={`mt-4 w-full rounded-lg border px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
          isConnected
            ? 'border-slate-200 text-slate-600 hover:bg-slate-50'
            : 'border-indigo-200 bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
        }`}
      >
        {isConnected ? 'Manage' : 'Connect'}
      </button>
    </div>
  );
};
