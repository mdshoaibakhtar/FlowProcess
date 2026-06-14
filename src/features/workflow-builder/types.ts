import type { Edge, Node } from 'reactflow';

export type WorkflowNodeKind =
  | 'trigger'
  | 'screening'
  | 'approval'
  | 'condition'
  | 'assessment'
  | 'interview'
  | 'email'
  | 'sms'
  | 'offer'
  | 'rejection'
  | 'stop';

export type WorkflowNodeData = {
  label: string;
  kind: WorkflowNodeKind;
  triggerTypeName?: string;
};

export type WorkflowNode = Node<WorkflowNodeData>;

export type WorkflowSnapshot = {
  nodes: WorkflowNode[];
  edges: Edge[];
};

export type PaletteItem = {
  kind: Exclude<WorkflowNodeKind, 'trigger'>;
  label: string;
  description: string;
};
