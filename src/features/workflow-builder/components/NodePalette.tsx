import type { DragEvent } from 'react';
import { PALETTE_ITEMS } from '../constants';
import type { WorkflowNodeKind } from '../types';

type NodePaletteProps = {
  onDragStart: (
    event: DragEvent<HTMLButtonElement>,
    kind: Exclude<WorkflowNodeKind, 'trigger'>,
  ) => void;
  onSaveFlow: () => void;
  onCancelFlow: () => void;
};

const NodePalette = ({ onDragStart, onSaveFlow, onCancelFlow }: NodePaletteProps) => {
  return (
    <aside className='flex h-full w-full flex-col border-l border-(--app-border) bg-(--surface-primary) p-4'>
      <div className='flex-1'>
        <h3 className='text-sm font-semibold text-(--app-text)'>Node Toolbox</h3>
        <p className='mt-1 text-xs text-(--muted-text)'>Drag any node into the canvas</p>

        <div className='mt-4 space-y-2'>
          {PALETTE_ITEMS.map((item) => (
            <button
              key={item.kind}
              type='button'
              draggable
              onDragStart={(event) => onDragStart(event, item.kind)}
              className='w-full cursor-grab rounded-xl border border-(--app-border) bg-(--surface-secondary) p-3 text-left transition hover:bg-(--surface-muted) active:cursor-grabbing'
            >
              <p className='text-sm font-semibold text-(--app-text)'>{item.label}</p>
              <p className='mt-1 text-xs text-(--muted-text)'>{item.description}</p>
            </button>
          ))}
        </div>

        <div className='mt-5 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-900'>
          Trigger node is fixed and cannot be removed from the canvas.
        </div>
      </div>

      <div className='flex flex-row mt-4 space-x-2 border-t border-(--app-border) pt-4'>
        <button
          type='button'
          onClick={onSaveFlow}
          className='w-full rounded-lg bg-(--accent-strong) px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer'
        >
          Save Flow
        </button>

        <button
          type='button'
          onClick={onCancelFlow}
          className='w-full rounded-lg border border-(--app-border) bg-(--surface-secondary) px-4 py-2 text-sm font-medium text-(--app-text) transition hover:bg-(--surface-muted) cursor-pointer'
        >
          Cancel
        </button>
      </div>
    </aside>
  );
};

export default NodePalette;
