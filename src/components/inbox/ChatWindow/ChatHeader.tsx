import { Phone, Search, MoreVertical } from 'lucide-react';
import type { ContactDetails } from '../../../types';
import AvatarIcon from '../AvatarIcon';

interface ChatHeaderProps {
  contact: ContactDetails | null;
}

export const ChatHeader = ({ contact }: ChatHeaderProps) => {
  return (
    <header className='flex items-center justify-between border-b border-slate-100 px-6 py-3'>
      <div className='flex items-center gap-3'>
        {contact && <AvatarIcon avatar={contact.avatar} size='sm' />}
        <p className='text-sm font-medium text-slate-800'>
          {contact?.name ?? 'Select a conversation'}
        </p>
      </div>

      <div className='flex items-center gap-4 text-slate-400'>
        <button aria-label='Call' className='hover:text-slate-600'>
          <Phone className='h-4 w-4' />
        </button>
        <button aria-label='Search in conversation' className='hover:text-slate-600'>
          <Search className='h-4 w-4' />
        </button>
        <button aria-label='More options' className='hover:text-slate-600'>
          <MoreVertical className='h-4 w-4' />
        </button>
      </div>
    </header>
  );
};
