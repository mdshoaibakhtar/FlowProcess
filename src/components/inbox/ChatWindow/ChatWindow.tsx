import type { Dispatch, SetStateAction } from 'react';
import { useConversation } from '../../../hooks/useConversation';
import type { ContactDetails } from '../../../types';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';

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
    <section className='flex h-full flex-1 flex-col bg-(--surface-primary)'>
      <ChatHeader
        contact={contact}
        showContactPanel={showContactPanel}
        setShowContactPanel={setShowContactPanel}
      />
      <MessageList groups={messageGroups} isLoading={isLoading} error={error} />
    </section>
  );
};

export default ChatWindow;
