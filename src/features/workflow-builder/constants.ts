import { type Edge } from 'reactflow';
import type { PaletteItem, WorkflowNode, WorkflowNodeKind } from './types';

export const TRIGGER_NODE_ID = 'trigger-node';
export const TRIGGER_DEFAULT_NAME = 'Manual Start';
export const DRAG_MIME_TYPE = 'application/processflow-node';

export const INITIAL_NODES: WorkflowNode[] = [
  {
    id: TRIGGER_NODE_ID,
    type: 'workflowNode',
    position: { x: 120, y: 200 },
    data: {
      label: `Trigger: ${TRIGGER_DEFAULT_NAME}`,
      kind: 'trigger',
      triggerTypeName: TRIGGER_DEFAULT_NAME,
    },
    deletable: false,
  },
];

export const INITIAL_EDGES: Edge[] = [];

export const PALETTE_ITEMS: PaletteItem[] = [
  {
    kind: 'sms',
    label: 'SMS',
    description: 'Send a text message',
  },
  {
    kind: 'email',
    label: 'Email',
    description: 'Send an email message',
  },
  {
    kind: 'restApi',
    label: 'REST API',
    description: 'Call an external API',
  },
  {
    kind: 'stop',
    label: 'Stop',
    description: 'End workflow execution',
  },
  {
    kind: 'other',
    label: 'Other',
    description: 'Add a custom action node',
  },
];

export const NODE_LABELS: Record<Exclude<WorkflowNodeKind, 'trigger'>, string> = {
  sms: 'SMS',
  email: 'Email',
  restApi: 'REST API',
  stop: 'Stop',
  other: 'Custom Action',
};

export const NODE_STYLE_CLASSES: Record<WorkflowNodeKind, string> = {
  trigger: 'border-blue-400 bg-blue-50 text-blue-900',
  sms: 'border-sky-400 bg-sky-50 text-sky-900',
  email: 'border-indigo-400 bg-indigo-50 text-indigo-900',
  restApi: 'border-emerald-400 bg-emerald-50 text-emerald-900',
  stop: 'border-rose-400 bg-rose-50 text-rose-900',
  other: 'border-violet-400 bg-violet-50 text-violet-900',
};
