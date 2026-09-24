import { Activity, useState } from 'react';
import ChatWindow from '../components/inbox/ChatWindow/ChatWindow';
import ContactPanel from '../components/inbox/ContactPanel/ContactPanel';
import ChatSidebar from '../components/inbox/Sidebar/ChatSidebar';
import { mockContactDetails } from '../data/mockData';

const Inbox = () => {
  const [showContactPanel, setShowContactPanel] = useState<boolean>(false);
  const [activeChatId, setActiveChatId] = useState<string>('chat-mike');
  return (
    <div className='rounded-md border border-(--app-border) bg-(--surface-primary) flex p-0.5 h-[86vh]'>
      <ChatSidebar activeChatId={activeChatId} onSelectChat={(chatId) => setActiveChatId(chatId)} />
      <ChatWindow
        chatId={activeChatId}
        contact={mockContactDetails[activeChatId]}
        showContactPanel={showContactPanel}
        setShowContactPanel={setShowContactPanel}
      />
      <Activity mode={showContactPanel ? 'visible' : 'hidden'}>
        <ContactPanel chatId={activeChatId} />
      </Activity>
    </div>
  );
};

export default Inbox;
