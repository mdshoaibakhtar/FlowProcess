import type { WorkflowNode } from '../types';

type NodeConfigPanelProps = {
  node: WorkflowNode;
  triggerNameDraft: string;
  onChangeTriggerName: (value: string) => void;
  onApplyTriggerConfig: () => void;
  onClose: () => void;
};

const NodeConfigPanel = ({
  node,
  triggerNameDraft,
  onChangeTriggerName,
  onApplyTriggerConfig,
}: NodeConfigPanelProps) => {
  const isTrigger = node.data.kind === 'trigger';

  return (
    <aside className='w-full shrink-0 h-full border-l border-(--app-border) bg-(--surface-primary) p-4'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-sm font-semibold text-(--app-text)'>Node Configuration</h3>
      </div>

      <div className='rounded-xl border border-(--app-border) bg-(--surface-secondary) p-3'>
        <p className='text-xs uppercase tracking-wide text-(--muted-text)'>Node Type</p>
        <p className='mt-1 text-sm font-semibold text-(--app-text) uppercase'>{node.data.kind}</p>
      </div>

      {isTrigger ? (
        <div className='mt-4 space-y-3'>
          <label className='block'>
            <span className='text-sm font-medium text-(--app-text)'>Trigger Type Name</span>
            <input
              value={triggerNameDraft}
              onChange={(event) => onChangeTriggerName(event.target.value)}
              placeholder='e.g. New User Signup'
              className='mt-1 w-full rounded-lg border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--app-text) outline-none'
            />
          </label>

          <button
            type='button'
            onClick={onApplyTriggerConfig}
            className='w-full rounded-lg bg-(--accent-strong) px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90'
          >
            Apply Trigger Config
          </button>
        </div>
      ) : (
        <p className='mt-4 text-sm text-(--muted-text)'>
          This node currently uses default configuration. Trigger node supports custom naming.
        </p>
      )}
    </aside>
  );
};

export default NodeConfigPanel;
