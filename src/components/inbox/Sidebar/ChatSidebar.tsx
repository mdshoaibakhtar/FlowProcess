import { useState } from 'react';
import type { ChatFilter } from '../../../types';
import ChatListItem from './ChatListItem';
import SidebarSearch from './SidebarSearch';
import SidebarTabs from './SidebarTabs';
import useChatList from '../../../hooks/useChatList';

interface SidebarProps {
  activeChatId: string | null;
  onSelectChat: (chatId: string) => void;
}

const ChatSidebar = ({ activeChatId, onSelectChat }: SidebarProps) => {
  const [filter, setFilter] = useState<ChatFilter>('all');
  const { pinned, recent, counts, isLoading, error } = useChatList({
    pinned: [],
    recent: [],
    counts: null,
    isLoading: false,
    error: null,
    refetch: () => console.warn(''),
    filter: 'all',
  });

  return (
    <aside className='flex h-full w-80 shrink-0 flex-col border-r border-(--app-border)'>
      <div className='space-y-3 border-b border-slate-100 p-4'>
        <SidebarSearch />
        <SidebarTabs activeFilter={filter} counts={counts} onChange={setFilter} />
      </div>

      <div className='flex-1 overflow-y-auto px-2 py-2'>
        {isLoading && <p className='px-2 py-4 text-sm text-slate-400'>Loading chats…</p>}

        {error && <p className='px-2 py-4 text-sm text-red-500'>{error}</p>}

        {!isLoading && !error && (
          <>
            {pinned.length > 0 && (
              <div className='mb-3'>
                <p className='px-2 pb-1 text-xs font-medium uppercase tracking-wide text-slate-400'>
                  Pinned
                </p>
                <div className='space-y-0.5'>
                  {pinned.map((chat) => (
                    <ChatListItem
                      key={chat.id}
                      chat={chat}
                      isActive={chat.id === activeChatId}
                      onSelect={onSelectChat}
                    />
                  ))}
                </div>
              </div>
            )}

            {recent.length > 0 && (
              <div>
                <p className='px-2 pb-1 text-xs font-medium uppercase tracking-wide text-slate-400'>
                  Recent
                </p>
                <div className='space-y-0.5'>
                  {recent.map((chat) => (
                    <ChatListItem
                      key={chat.id}
                      chat={chat}
                      isActive={chat.id === activeChatId}
                      onSelect={onSelectChat}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default ChatSidebar;
