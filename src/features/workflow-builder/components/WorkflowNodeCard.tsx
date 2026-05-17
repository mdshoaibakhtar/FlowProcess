import { Handle, Position, type NodeProps } from 'reactflow';
import { NODE_STYLE_CLASSES } from '../constants';
import type { WorkflowNodeData } from '../types';

const WorkflowNodeCard = ({ data, selected }: NodeProps<WorkflowNodeData>) => {
  const isTrigger = data.kind === 'trigger';
  const isStop = data.kind === 'stop';

  return (
    <div
      className={`min-w-44 rounded-xl border px-3 py-2 text-left text-xs shadow-sm transition ${NODE_STYLE_CLASSES[data.kind]} ${
        selected ? 'border-2' : ''
      }`}
    >
      {!isTrigger && (
        <Handle
          type='target'
          position={Position.Left}
          className='!h-2.5 !w-2.5 !border !border-slate-400 !bg-slate-100'
        />
      )}

      <p className='text-[10px] font-semibold uppercase tracking-wide opacity-70'>{data.kind}</p>
      <p className='mt-1 text-sm font-semibold'>{data.label}</p>

      {!isStop && (
        <Handle
          type='source'
          position={Position.Right}
          className='!h-2.5 !w-2.5 !border !border-slate-400 !bg-slate-100'
        />
      )}
    </div>
  );
};

export default WorkflowNodeCard;
