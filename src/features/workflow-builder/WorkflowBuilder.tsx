import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
} from 'reactflow';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    position: { x: 250, y: 50 },
    data: { label: 'Start Request' },
  },
  {
    id: '2',
    position: { x: 250, y: 180 },
    data: { label: 'Manager Approval' },
  },
  {
    id: '3',
    type: 'output',
    position: { x: 250, y: 320 },
    data: { label: 'Notify Employee' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
  },
];

const WorkflowBuilder = () => {
  const [nodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: Connection) => {
    setEdges((currentEdges) =>
      addEdge(
        {
          ...params,
          animated: true,
        },
        currentEdges,
      ),
    );
  };

  return (
    <div className='h-[72vh] min-h-[540px] w-full overflow-hidden rounded-2xl border border-(--app-border) bg-(--surface-primary)'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  );
};

export default WorkflowBuilder;
