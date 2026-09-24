import { Activity, type Dispatch, type SetStateAction } from 'react';
import { useConversation } from '../../../hooks/useConversation';
import type { ContactDetails } from '../../../types';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { Send } from 'lucide-react';

interface ChatWindowProps {
  chatId: string | null;
  contact: ContactDetails | null;
  showContactPanel: boolean;
  setShowContactPanel: Dispatch<SetStateAction<boolean>>;
}

const ChatWindow = ({
  chatId,
  contact,
  showContactPanel,
  setShowContactPanel,
}: ChatWindowProps) => {
  const { messageGroups, isLoading, error } = useConversation(chatId);

  return (
    <section className='flex min-h-fit flex-1 flex-col bg-(--surface-primary)'>
      <ChatHeader
        contact={contact}
        showContactPanel={showContactPanel}
        setShowContactPanel={setShowContactPanel}
      />
      <MessageList groups={messageGroups} isLoading={isLoading} error={error} />
      <Activity mode={isLoading ? 'hidden' : 'visible'}>
        <div className='mt-2 my-3 mx-6 flex justify-between items-center'>
          <input
            name='message'
            placeholder='Enter your message...'
            className='w-full px-4 py-2 rounded-l-md border border-(--app-border) text-md'
          />
          <div className='bg-(--accent-soft) p-2 rounded-r-md border border-(--accent-soft) cursor-pointer'>
            <Send />
          </div>
        </div>
      </Activity>
    </section>
  );
};

export default ChatWindow;
