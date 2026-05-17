import { Download, FileJson, Maximize2, Minimize2, Redo2, RotateCcw, Undo2 } from 'lucide-react';
type WorkflowToolbarProps = {
  canUndo: boolean;
  canRedo: boolean;
  isFullscreen: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onToggleFullscreen: () => void;
  onDownloadPng: () => void;
  onDownloadJson: () => void;
  onResetFlow: () => void;
};
const actionButtonClassName =
  'inline-flex items-center gap-2 rounded-lg border border-(--app-border) bg-(--surface-secondary) px-3 py-2 text-sm font-medium text-(--app-text) transition hover:bg-(--surface-muted) disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer';

const WorkflowToolbar = ({
  canUndo,
  canRedo,
  isFullscreen,
  onUndo,
  onRedo,
  onToggleFullscreen,
  onDownloadPng,
  onDownloadJson,
  onResetFlow,
}: WorkflowToolbarProps) => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-2 border-b border-(--app-border) bg-(--surface-primary) px-4 py-3'>
      <div className='flex gap-4'>
        <button
          type='button'
          onClick={onUndo}
          disabled={!canUndo}
          className={actionButtonClassName}
        >
          <Undo2 className='size-4' />
          Undo
        </button>

        <button
          type='button'
          onClick={onRedo}
          disabled={!canRedo}
          className={actionButtonClassName}
        >
          <Redo2 className='size-4' />
          Redo
        </button>
        <button type='button' onClick={onResetFlow} className={actionButtonClassName}>
          <RotateCcw className='size-4' />
          Reset Flow
        </button>
      </div>

      <div className='flex gap-4'>
        <button type='button' onClick={onDownloadPng} className={actionButtonClassName}>
          <Download className='size-4' />
          Download PNG
        </button>

        <button type='button' onClick={onDownloadJson} className={actionButtonClassName}>
          <FileJson className='size-4' />
          Download JSON
        </button>

        <button type='button' onClick={onToggleFullscreen} className={actionButtonClassName}>
          {isFullscreen ? <Minimize2 className='size-4' /> : <Maximize2 className='size-4' />}
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
};

export default WorkflowToolbar;
