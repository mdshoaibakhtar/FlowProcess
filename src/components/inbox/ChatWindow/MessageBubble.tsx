import type { Message } from '../../../types';
import AvatarIcon from '../AvatarIcon';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const { isOwnMessage } = message;

  return (
    <div className={`flex flex-col gap-1 ${isOwnMessage ? 'items-end' : 'items-start'}`}>
      <div
        className={`flex items-center gap-2 text-xs text-slate-400 ${
          isOwnMessage ? 'flex-row-reverse' : ''
        }`}
      >
        <span>{message.time}</span>
        <span className='font-medium text-slate-500'>{message.senderName}</span>
      </div>

      <div
        className={`flex max-w-[70%] items-start gap-2 ${isOwnMessage ? 'flex-row-reverse' : ''}`}
      >
        <AvatarIcon avatar={message.avatar} size='sm' />
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isOwnMessage
              ? 'rounded-tr-sm bg-indigo-50 text-slate-700'
              : 'rounded-tl-sm bg-slate-100 text-slate-700'
          }`}
        >
          {message.text}
        </div>
      </div>
    </div>
  );
};
