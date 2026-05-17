'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type DialogScreenProps = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  width?: string;
  className?: string;
};

const DialogScreen = ({
  isOpen,
  onClose,
  title,
  body,
  footer,
  width = 'max-w-lg',
  className = '',
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
              ${width}
              ${className}
              data-closed:scale-95
              data-closed:opacity-0`}
          >
            {/* Header */}
            <div className='flex w-full items-center justify-end'>
              {title && (
                <div className='px-6 py-4  w-full'>
                  <DialogTitle className='text-lg font-normal text-slate-700'>{title}</DialogTitle>
                </div>
              )}
              <div className='px-6 py-4 flex w-full justify-end'>
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
