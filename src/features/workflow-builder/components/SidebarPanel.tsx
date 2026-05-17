import NodePalette from './NodePalette';
import type { WorkflowNode, WorkflowNodeKind } from '../types';
import NodeConfigPanel from './NodeConfigPanel';
import type { DragEvent } from 'react';

type SidebarPanelProps = {
  selectedNode: WorkflowNode | null;
  triggerNameDraft: string;
  onChangeTriggerName: (value: string) => void;
  onApplyTriggerConfig: () => void;
  onDragStart: (
    event: DragEvent<HTMLButtonElement>,
    kind: Exclude<WorkflowNodeKind, 'trigger'>,
  ) => void;
  onCloseConfig: () => void;
};

const SidebarPanel = ({
  selectedNode,
  triggerNameDraft,
  onChangeTriggerName,
  onApplyTriggerConfig,
  onDragStart,
  onCloseConfig,
}: SidebarPanelProps) => {
  return (
    <aside className='w-80 shrink-0 border-r border-(--app-border) bg-(--surface-primary)'>
      {!selectedNode ? (
        <NodePalette onDragStart={onDragStart} />
      ) : (
        <NodeConfigPanel
          node={selectedNode}
          triggerNameDraft={triggerNameDraft}
          onChangeTriggerName={onChangeTriggerName}
          onApplyTriggerConfig={onApplyTriggerConfig}
          onClose={onCloseConfig}
        />
      )}
    </aside>
  );
};

export default SidebarPanel;
