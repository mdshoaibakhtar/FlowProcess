import type { ChatCounts, ChatFilter } from '../../../types';

interface SidebarTabsProps {
  activeFilter: ChatFilter;
  counts: ChatCounts | null;
  onChange: (filter: ChatFilter) => void;
}

const TABS: { key: ChatFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'unread', label: 'Unread' },
  { key: 'draft', label: 'Draft' },
  { key: 'archived', label: 'Archived' },
];

const SidebarTabs = ({ activeFilter, counts, onChange }: SidebarTabsProps) => {
  return (
    <div className='flex items-center gap-4 pb-2'>
      {TABS.map((tab) => {
        const count = counts?.[tab.key] ?? 0;
        const isActive = tab.key === activeFilter;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`text-sm transition-colors cursor-pointer ${
              isActive ? 'font-medium text-indigo-600' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}{' '}
            <span className={isActive ? 'text-indigo-400' : 'text-slate-400'}>
              ({String(count).padStart(2, '0')})
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default SidebarTabs;
