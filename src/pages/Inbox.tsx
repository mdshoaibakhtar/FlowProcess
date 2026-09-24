import { Activity, useState } from 'react';
import ChatWindow from '../components/inbox/ChatWindow/ChatWindow';
import ContactPanel from '../components/inbox/ContactPanel/ContactPanel';
import ChatSidebar from '../components/inbox/Sidebar/ChatSidebar';
import { mockContactDetails } from '../data/mockData';

const Inbox = () => {
  const [showContactPanel, setShowContactPanel] = useState<boolean>(false);
  return (
    <div className='rounded-md border border-(--app-border) bg-(--surface-primary) flex p-0.5'>
      <ChatSidebar activeChatId={'chat-mike'} onSelectChat={() => console.warn('Help')} />
      <ChatWindow
        chatId={'chat-mike'}
        contact={mockContactDetails['chat-mike']}
        showContactPanel={showContactPanel}
        setShowContactPanel={setShowContactPanel}
      />
      <Activity mode={showContactPanel ? 'visible' : 'hidden'}>
        <ContactPanel chatId={'chat-mike'} />
      </Activity>
    </div>
  );
};

export default Inbox;
