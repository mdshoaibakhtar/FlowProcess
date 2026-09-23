'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type DialogScreenProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  body?: ReactNode;
  footer?: ReactNode;
  className?: string;
  leftHeaderComponent?: ReactNode;
};

const DialogScreen = ({
  isOpen,
  onClose,
  body,
  footer,
  className = '',
  leftHeaderComponent,
}: DialogScreenProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-black/40 transition-opacity data-closed:opacity-0'
      />

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className={`w-full transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all
              ${className}
              data-closed:scale-95
              data-closed:opacity-0`}
          >
            {/* Header */}
            <div className='flex w-full items-center justify-end'>
              {leftHeaderComponent}
              <div className='px-6 pb-2 pt-4 flex w-full justify-end'>
                <button className='cursor-pointer' onClick={() => onClose(false)}>
                  <X color='gray' />
                </button>
              </div>
            </div>

            {/* Body */}
            {body && <div className='px-6 py-2 text-sm text-slate-600'>{body}</div>}

            {/* Footer */}
            {footer && <div className='border-t bg-slate-50 px-6 py-4'>{footer}</div>}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogScreen;
