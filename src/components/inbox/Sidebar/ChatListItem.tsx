import { Pin } from 'lucide-react';
import type { ChatListItemData } from '../../../types';
import Avatar from '../AvatarIcon';

interface ChatListItemProps {
  chat: ChatListItemData;
  isActive: boolean;
  onSelect: (chatId: string) => void;
}

const ChatListItem = ({ chat, isActive, onSelect }: ChatListItemProps) => {
  return (
    <button
      onClick={() => onSelect(chat.id)}
      className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors cursor-pointer overflow-hidden ${
        isActive ? 'bg-indigo-50' : 'hover:bg-slate-50'
      }`}
    >
      <Avatar avatar={chat.avatar} />

      <div className='flex flex-col w-56'>
        <div className='flex items-center justify-between'>
          <p className='truncate text-sm font-medium text-slate-800'>{chat.name}</p>
          <span className='shrink-0 text-xs text-slate-400'>{chat.time}</span>
        </div>

        <div className='flex items-center justify-between gap-1'>
          <p className='truncate text-xs text-slate-500'>{chat.lastMessage}</p>
          {chat.unreadCount ? (
            <span className='flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-medium text-white'>
              {chat.unreadCount}
            </span>
          ) : null}
          {chat.isPinned ? <Pin className='h-3.5 w-3.5 text-slate-300' /> : null}
        </div>
      </div>
    </button>
  );
};

export default ChatListItem;
