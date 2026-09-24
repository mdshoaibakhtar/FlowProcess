import type { ContactDetails } from '../../../types';
import AvatarIcon from '../AvatarIcon';

interface ContactHeaderProps {
  contact: ContactDetails;
}

export const ContactHeader = ({ contact }: ContactHeaderProps) => {
  return (
    <div className='flex items-center gap-3'>
      <AvatarIcon avatar={contact.avatar} size='lg' />
      <div>
        <p className='text-sm font-semibold text-slate-800'>{contact.name}</p>
        <p className='text-xs text-slate-500'>
          {contact.title} at {contact.company}
        </p>
      </div>
    </div>
  );
};
