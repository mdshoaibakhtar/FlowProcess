import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { logsData } from '../../data/logsData';
import moment from 'moment';

const Accordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenItems((currentOpenItems) => {
      if (currentOpenItems.includes(id)) {
        return currentOpenItems.filter((itemId) => itemId !== id);
      }

      return [...currentOpenItems, id];
    });
  };

  return (
    <div className='flex flex-col gap-2'>
      {logsData.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className='border border-slate-200 rounded-xl overflow-hidden relative'
          >
            <div className='flex gap-2'>
              <div
                className={`w-1 min-h-full absolute ${item?.status == 'success' ? 'bg-green-500' : item?.status == 'error' || item?.status == 'failed' ? 'bg-red-500' : 'bg-yellow-400'}`}
              />
              <button
                type='button'
                onClick={() => handleToggle(item.id)}
                className='flex w-full items-center justify-between py-5 text-left text-slate-800 cursor-pointer ml-4'
                aria-expanded={isOpen}
              >
                <div className='flex flex-col'>
                  <span>{item.title}</span>
                  <span className='text-sm text-gray-500'>{item.shortDescription}</span>
                  <span className='text-xs text-gray-600'>
                    {moment(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                  </span>
                </div>

                <span
                  className={`text-slate-800 transition-transform duration-300 mr-4 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  {isOpen ? <Minus className='h-4 w-4' /> : <Plus className='h-4 w-4' />}
                </span>
              </button>
            </div>

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out px-4 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className='min-h-0'>
                <div className='pb-5 text-sm text-slate-500'>{item.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
