import type { Edge, Node } from 'reactflow';

export type WorkflowNodeKind = 'trigger' | 'sms' | 'email' | 'restApi' | 'stop' | 'other';

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
