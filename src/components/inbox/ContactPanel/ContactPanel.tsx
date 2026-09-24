import { ContactHeader } from './ContactHeader';
import { ContactActions } from './ContactActions';
import { ContactDetailsSection } from './ContactDetailsSection';
import { CommunicationPreferences } from './CommunicationPreferences';
import { useContact } from '../../../hooks/useContact';

interface ContactPanelProps {
  chatId: string | null;
}

const ContactPanel = ({ chatId }: ContactPanelProps) => {
  const { contact, isLoading, error } = useContact(chatId);

  return (
    <aside className='h-full w-80 shrink-0 overflow-y-auto border-l border-(--app-border) bg-(--surface-primary) p-5'>
      {isLoading && <p className='text-sm text-slate-400'>Loading contact…</p>}
      {error && <p className='text-sm text-red-500'>{error}</p>}

      {!isLoading && !error && !contact && (
        <p className='text-sm text-slate-400'>Select a conversation to see contact details.</p>
      )}

      {contact && !isLoading && (
        <div className='space-y-5'>
          <ContactHeader contact={contact} />
          <ContactActions />
          <ContactDetailsSection contact={contact} />
          <CommunicationPreferences />
        </div>
      )}
    </aside>
  );
};

export default ContactPanel;
