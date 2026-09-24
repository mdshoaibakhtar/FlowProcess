import { NotebookPen, Mail, CheckSquare, CalendarDays, MoreHorizontal } from 'lucide-react';

const ACTIONS = [
  { key: 'note', label: 'Note', icon: NotebookPen },
  { key: 'email', label: 'Email', icon: Mail },
  { key: 'task', label: 'Task', icon: CheckSquare },
  { key: 'meeting', label: 'Meeti..', icon: CalendarDays },
  { key: 'more', label: 'More', icon: MoreHorizontal },
] as const;

export const ContactActions = () => {
  return (
    <div className='grid grid-cols-5 gap-2'>
      {ACTIONS.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          className='flex flex-col items-center gap-1 rounded-lg py-2 text-slate-500 hover:bg-slate-50'
        >
          <Icon className='h-4 w-4' />
          <span className='text-[11px]'>{label}</span>
        </button>
      ))}
    </div>
  );
};
