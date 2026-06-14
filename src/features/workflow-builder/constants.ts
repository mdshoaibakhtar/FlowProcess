import { type Edge } from 'reactflow';
import type { PaletteItem, WorkflowNode, WorkflowNodeKind } from './types';

export const TRIGGER_NODE_ID = 'trigger-node';
export const TRIGGER_DEFAULT_NAME = 'Candidate Applied';
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
    kind: 'screening',
    label: 'Screening',
    description: 'Resume screening by HR',
  },
  {
    kind: 'approval',
    label: 'Approval',
    description: 'Manual approval or rejection',
  },
  {
    kind: 'condition',
    label: 'Condition',
    description: 'Branch workflow based on rules',
  },
  {
    kind: 'assessment',
    label: 'Assessment',
    description: 'Conduct candidate assessment',
  },
  {
    kind: 'interview',
    label: 'Interview',
    description: 'Schedule candidate interview',
  },
  {
    kind: 'email',
    label: 'Email',
    description: 'Send email notification',
  },
  {
    kind: 'sms',
    label: 'SMS',
    description: 'Send SMS notification',
  },
  {
    kind: 'offer',
    label: 'Offer',
    description: 'Generate and send offer',
  },
  {
    kind: 'rejection',
    label: 'Rejection',
    description: 'Reject candidate',
  },
  {
    kind: 'stop',
    label: 'End Process',
    description: 'End workflow execution',
  },
];

export const NODE_LABELS: Record<Exclude<WorkflowNodeKind, 'trigger'>, string> = {
  screening: 'Screening',
  approval: 'Approval',
  condition: 'Condition',
  assessment: 'Assessment',
  interview: 'Interview',
  email: 'Email',
  sms: 'SMS',
  offer: 'Offer',
  rejection: 'Rejection',
  stop: 'End Process',
};

export const NODE_STYLE_CLASSES: Record<WorkflowNodeKind, string> = {
  trigger: 'border-blue-400 bg-blue-50 text-blue-900',
  screening: 'border-purple-400 bg-purple-50 text-purple-900',
  approval: 'border-amber-400 bg-amber-50 text-amber-900',
  condition: 'border-cyan-400 bg-cyan-50 text-cyan-900',
  assessment: 'border-green-400 bg-green-50 text-green-900',
  interview: 'border-indigo-400 bg-indigo-50 text-indigo-900',
  email: 'border-sky-400 bg-sky-50 text-sky-900',
  sms: 'border-blue-400 bg-blue-50 text-blue-900',
  offer: 'border-emerald-400 bg-emerald-50 text-emerald-900',
  rejection: 'border-rose-400 bg-rose-50 text-rose-900',
  stop: 'border-slate-400 bg-slate-50 text-slate-900',
};
