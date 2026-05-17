import type { DragEvent } from 'react';
import { PALETTE_ITEMS } from '../constants';
import type { WorkflowNodeKind } from '../types';

type NodePaletteProps = {
  onDragStart: (
    event: DragEvent<HTMLButtonElement>,
    kind: Exclude<WorkflowNodeKind, 'trigger'>,
  ) => void;
};

const NodePalette = ({ onDragStart }: NodePaletteProps) => {
  return (
    <aside className='w-full h-full border-l shrink-0 border-(--app-border) bg-(--surface-primary) p-4'>
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
    </aside>
  );
};

export default NodePalette;
