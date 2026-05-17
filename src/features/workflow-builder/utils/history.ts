import type { Edge } from 'reactflow';
import type { WorkflowNode, WorkflowSnapshot } from '../types';

export const deepCopy = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value)) as T;
};

export const createSnapshot = (nodes: WorkflowNode[], edges: Edge[]): WorkflowSnapshot => {
  return {
    nodes: deepCopy(nodes),
    edges: deepCopy(edges),
  };
};

export const isSameSnapshot = (a: WorkflowSnapshot, b: WorkflowSnapshot): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
};
