import { Search } from 'lucide-react';

const SidebarSearch = () => {
  return (
    <div className='relative'>
      <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
      <input
        type='text'
        placeholder='Search messages'
        className='w-full rounded-md border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200'
      />
    </div>
  );
};

export default SidebarSearch;
