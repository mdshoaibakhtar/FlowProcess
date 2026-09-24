import ChatWindow from '../components/inbox/ChatWindow/ChatWindow';
import ContactPanel from '../components/inbox/ContactPanel/ContactPanel';
import ChatSidebar from '../components/inbox/Sidebar/ChatSidebar';

const Inbox = () => {
  return (
    <div className='rounded-md border border-(--app-border) bg-(--surface-primary) flex p-0.5'>
      <ChatSidebar activeChatId={'chat-mike'} onSelectChat={() => console.warn('Help')} />
      <ChatWindow chatId={'chat-mike'} contact={null} />
      <ContactPanel chatId={'chat-mike'} />
    </div>
  );
};

export default Inbox;
