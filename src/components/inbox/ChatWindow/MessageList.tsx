import type { MessageGroup } from '../../../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  groups: MessageGroup[];
  isLoading: boolean;
  error: string | null;
}

export const MessageList = ({ groups, isLoading, error }: MessageListProps) => {
  if (isLoading) {
    return <p className='p-6 text-sm text-slate-400'>Loading messages…</p>;
  }

  if (error) {
    return <p className='p-6 text-sm text-red-500'>{error}</p>;
  }

  if (groups.length === 0) {
    return (
      <p className='p-6 text-sm text-slate-400'>
        No messages yet. Select a conversation from the left.
      </p>
    );
  }

  return (
    <div className='flex-1 space-y-6 overflow-y-auto px-6 py-4'>
      {groups.map((group, groupIndex) => (
        <div key={`${group.date}-${groupIndex}`} className='space-y-6'>
          <div className='flex items-center gap-3'>
            <div className='h-px flex-1 bg-slate-100' />
            <span className='text-xs text-slate-400'>{group.date}</span>
            <div className='h-px flex-1 bg-slate-100' />
          </div>

          {group.messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      ))}
    </div>
  );
};
