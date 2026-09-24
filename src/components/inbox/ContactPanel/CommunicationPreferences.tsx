import { ChevronUp } from 'lucide-react';

export const CommunicationPreferences = () => {
  return (
    <div className='space-y-2 border-t border-slate-100 pt-4'>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-medium text-slate-800'>Communication Preferences</p>
        <ChevronUp className='h-4 w-4 text-slate-400' />
      </div>
      <p className='text-sm text-slate-500'>
        Manage the types of emails and updates this contact receives.
      </p>
      <button className='text-sm text-indigo-600 hover:underline'>Manage subscriptions</button>
    </div>
  );
};
