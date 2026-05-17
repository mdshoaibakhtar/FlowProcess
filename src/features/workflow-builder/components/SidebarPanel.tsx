import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import NodePalette from './NodePalette';
import NodeConfigPanel from './NodeConfigPanel';
import type { WorkflowNode, WorkflowNodeKind } from '../types';
import type { DragEvent } from 'react';

type SidebarPanelProps = {
  selectedNode: WorkflowNode | null;
  triggerNameDraft: string;
  onChangeTriggerName: (value: string) => void;
  onApplyTriggerConfig: () => void;
  onCloseConfig: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onDragStart: (
    event: DragEvent<HTMLButtonElement>,
    kind: Exclude<WorkflowNodeKind, 'trigger'>,
  ) => void;
  onSaveFlow: () => void;
  onCancelFlow: () => void;
};

const SidebarPanel = ({
  selectedNode,
  triggerNameDraft,
  onChangeTriggerName,
  onApplyTriggerConfig,
  onDragStart,
  onCloseConfig,
  isCollapsed,
  onToggleCollapse,
  onSaveFlow,
  onCancelFlow,
}: SidebarPanelProps) => {
  return (
    <aside
      className={`relative shrink-0 border-r border-(--app-border) bg-(--surface-primary) transition-all duration-300 ${
        isCollapsed ? 'w-14' : 'w-80'
      }`}
    >
      <button
        type='button'
        onClick={onToggleCollapse}
        className='absolute right-3 top-3 z-10 rounded-md p-1 hover:bg-(--surface-muted)'
      >
        {isCollapsed ? <PanelLeftOpen className='size-4' /> : <PanelLeftClose className='size-4' />}
      </button>

      {!isCollapsed && (
        <>
          {!selectedNode ? (
            <NodePalette
              onDragStart={onDragStart}
              onSaveFlow={onSaveFlow}
              onCancelFlow={onCancelFlow}
            />
          ) : (
            <NodeConfigPanel
              node={selectedNode}
              triggerNameDraft={triggerNameDraft}
              onChangeTriggerName={onChangeTriggerName}
              onApplyTriggerConfig={onApplyTriggerConfig}
              onClose={onCloseConfig}
            />
          )}
        </>
      )}
    </aside>
  );
};

export default SidebarPanel;
