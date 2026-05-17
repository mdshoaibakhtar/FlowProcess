import { toPng } from 'html-to-image';
import { type DragEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  MarkerType,
  type Connection,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type ReactFlowInstance,
} from 'reactflow';
import WorkflowNodeCard from './components/WorkflowNodeCard';
import WorkflowToolbar from './components/WorkflowToolbar';
import {
  DRAG_MIME_TYPE,
  INITIAL_EDGES,
  INITIAL_NODES,
  NODE_LABELS,
  TRIGGER_DEFAULT_NAME,
  TRIGGER_NODE_ID,
} from './constants';
import { createSnapshot, deepCopy, isSameSnapshot } from './utils/history';
import type { WorkflowNode, WorkflowNodeData, WorkflowNodeKind, WorkflowSnapshot } from './types';
import SidebarPanel from './components/SidebarPanel';

const nodeTypes = {
  workflowNode: WorkflowNodeCard,
};

const WorkflowBuilder = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowCanvasRef = useRef<HTMLDivElement>(null);
  const nodeSequenceRef = useRef(1);

  const [nodes, setNodes] = useState<WorkflowNode[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>(INITIAL_EDGES);
  const [history, setHistory] = useState<WorkflowSnapshot[]>([
    createSnapshot(INITIAL_NODES, INITIAL_EDGES),
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [triggerDraftByNodeId, setTriggerDraftByNodeId] = useState<Record<string, string>>({
    [TRIGGER_NODE_ID]: TRIGGER_DEFAULT_NAME,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance<
    WorkflowNodeData,
    Edge
  > | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const nodesRef = useRef(nodes);
  const edgesRef = useRef(edges);
  const historyRef = useRef(history);
  const historyIndexRef = useRef(historyIndex);

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  useEffect(() => {
    edgesRef.current = edges;
  }, [edges]);

  useEffect(() => {
    historyRef.current = history;
  }, [history]);

  useEffect(() => {
    historyIndexRef.current = historyIndex;
  }, [historyIndex]);

  const selectedNode = useMemo(() => {
    return nodes.find((node) => node.id === selectedNodeId) ?? null;
  }, [nodes, selectedNodeId]);

  let triggerNameDraft = '';
  if (selectedNode?.data.kind === 'trigger') {
    triggerNameDraft =
      triggerDraftByNodeId[selectedNode.id] ??
      selectedNode.data.triggerTypeName ??
      TRIGGER_DEFAULT_NAME;
  }

  const recordSnapshot = useCallback((nextNodes: WorkflowNode[], nextEdges: Edge[]) => {
    const snapshot = createSnapshot(nextNodes, nextEdges);
    const currentSnapshot = historyRef.current[historyIndexRef.current];

    if (currentSnapshot && isSameSnapshot(currentSnapshot, snapshot)) {
      return;
    }

    const trimmedHistory = historyRef.current.slice(0, historyIndexRef.current + 1);
    const nextHistory = [...trimmedHistory, snapshot];
    const nextIndex = nextHistory.length - 1;

    historyRef.current = nextHistory;
    historyIndexRef.current = nextIndex;

    setHistory(nextHistory);
    setHistoryIndex(nextIndex);
  }, []);

  const handleNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((currentNodes) => {
      const nextNodes = applyNodeChanges(changes, currentNodes);
      nodesRef.current = nextNodes;
      return nextNodes;
    });
  }, []);

  const handleEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((currentEdges) => {
      const nextEdges = applyEdgeChanges(changes, currentEdges);
      edgesRef.current = nextEdges;
      return nextEdges;
    });
  }, []);

  const handleConnect = useCallback(
    (connection: Connection) => {
      const nextEdges = addEdge(
        {
          ...connection,
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
        },
        edgesRef.current,
      );

      setEdges(nextEdges);
      edgesRef.current = nextEdges;
      recordSnapshot(nodesRef.current, nextEdges);
    },
    [recordSnapshot],
  );

  const handleNodeDragStop = useCallback(() => {
    recordSnapshot(nodesRef.current, edgesRef.current);
  }, [recordSnapshot]);

  const handleNodesDelete = useCallback(() => {
    window.setTimeout(() => {
      recordSnapshot(nodesRef.current, edgesRef.current);
    }, 0);
  }, [recordSnapshot]);

  const handleEdgesDelete = useCallback(() => {
    window.setTimeout(() => {
      recordSnapshot(nodesRef.current, edgesRef.current);
    }, 0);
  }, [recordSnapshot]);

  const handleUndo = useCallback(() => {
    if (historyIndexRef.current === 0) {
      return;
    }

    const nextIndex = historyIndexRef.current - 1;
    const snapshot = historyRef.current[nextIndex];

    if (!snapshot) {
      return;
    }

    historyIndexRef.current = nextIndex;
    setHistoryIndex(nextIndex);

    const nextNodes = deepCopy(snapshot.nodes);
    const nextEdges = deepCopy(snapshot.edges);

    nodesRef.current = nextNodes;
    edgesRef.current = nextEdges;

    setNodes(nextNodes);
    setEdges(nextEdges);

    setSelectedNodeId((currentNodeId) => {
      if (currentNodeId && nextNodes.some((node) => node.id === currentNodeId)) {
        return currentNodeId;
      }

      return TRIGGER_NODE_ID;
    });
  }, []);

  const handleRedo = useCallback(() => {
    if (historyIndexRef.current >= historyRef.current.length - 1) {
      return;
    }

    const nextIndex = historyIndexRef.current + 1;
    const snapshot = historyRef.current[nextIndex];

    if (!snapshot) {
      return;
    }

    historyIndexRef.current = nextIndex;
    setHistoryIndex(nextIndex);

    const nextNodes = deepCopy(snapshot.nodes);
    const nextEdges = deepCopy(snapshot.edges);

    nodesRef.current = nextNodes;
    edgesRef.current = nextEdges;

    setNodes(nextNodes);
    setEdges(nextEdges);

    setSelectedNodeId((currentNodeId) => {
      if (currentNodeId && nextNodes.some((node) => node.id === currentNodeId)) {
        return currentNodeId;
      }

      return TRIGGER_NODE_ID;
    });
  }, []);

  const handlePaletteDragStart = useCallback(
    (event: DragEvent<HTMLButtonElement>, kind: Exclude<WorkflowNodeKind, 'trigger'>) => {
      event.dataTransfer.setData(DRAG_MIME_TYPE, kind);
      event.dataTransfer.effectAllowed = 'move';
    },
    [],
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowInstance || !flowCanvasRef.current) {
        return;
      }

      const kind = event.dataTransfer.getData(DRAG_MIME_TYPE) as Exclude<
        WorkflowNodeKind,
        'trigger'
      >;

      if (!kind) {
        return;
      }

      const bounds = flowCanvasRef.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const nextNodeId = `node-${nodeSequenceRef.current}`;
      nodeSequenceRef.current += 1;

      const newNode: WorkflowNode = {
        id: nextNodeId,
        type: 'workflowNode',
        position,
        data: {
          label: NODE_LABELS[kind],
          kind,
        },
      };

      const nextNodes = [...nodesRef.current, newNode];

      nodesRef.current = nextNodes;
      setNodes(nextNodes);
      setSelectedNodeId(newNode.id);
      recordSnapshot(nextNodes, edgesRef.current);
    },
    [reactFlowInstance, recordSnapshot],
  );

  const handleApplyTriggerConfig = useCallback(() => {
    if (!selectedNode || selectedNode.data.kind !== 'trigger') {
      return;
    }

    const nextTriggerName = triggerNameDraft.trim() || TRIGGER_DEFAULT_NAME;

    const nextNodes = nodesRef.current.map((node) => {
      if (node.id !== selectedNode.id) {
        return node;
      }

      return {
        ...node,
        data: {
          ...node.data,
          triggerTypeName: nextTriggerName,
          label: `Trigger: ${nextTriggerName}`,
        },
      };
    });

    nodesRef.current = nextNodes;
    setNodes(nextNodes);
    setTriggerDraftByNodeId((currentDrafts) => ({
      ...currentDrafts,
      [selectedNode.id]: nextTriggerName,
    }));
    recordSnapshot(nextNodes, edgesRef.current);
  }, [recordSnapshot, selectedNode, triggerNameDraft]);

  useEffect(() => {
    const updateTriggerPosition = () => {
      if (!flowCanvasRef.current) return;

      const canvasWidth = flowCanvasRef.current.clientWidth;

      // Need to fix this indentation to prevent eslint-disable, otherwise it will cause issues with the rest of the code formatting
      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === TRIGGER_NODE_ID
            ? {
                ...node,
                position: {
                  x: canvasWidth / 2 - 100,
                  y: 40,
                },
              }
            : node,
        ),
      );
    };

    updateTriggerPosition();
    window.addEventListener('resize', updateTriggerPosition);

    return () => window.removeEventListener('resize', updateTriggerPosition);
  }, []);

  const handleChangeTriggerName = useCallback(
    (value: string) => {
      if (!selectedNode || selectedNode.data.kind !== 'trigger') {
        return;
      }

      setTriggerDraftByNodeId((currentDrafts) => ({
        ...currentDrafts,
        [selectedNode.id]: value,
      }));
    },
    [selectedNode],
  );

  const handleDownloadJson = useCallback(() => {
    const flowData = reactFlowInstance?.toObject() ?? {
      nodes: nodesRef.current,
      edges: edgesRef.current,
      viewport: { x: 0, y: 0, zoom: 1 },
    };

    const blob = new Blob([JSON.stringify(flowData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'workflow.json';
    link.click();
    URL.revokeObjectURL(url);
  }, [reactFlowInstance]);

  const handleDownloadPng = useCallback(async () => {
    const targetElement = flowCanvasRef.current?.querySelector('.react-flow') as HTMLElement | null;

    if (!targetElement) {
      return;
    }

    try {
      const backgroundColor =
        getComputedStyle(document.documentElement).getPropertyValue('--surface-primary').trim() ||
        '#ffffff';

      const imageDataUrl = await toPng(targetElement, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor,
      });

      const link = document.createElement('a');
      link.href = imageDataUrl;
      link.download = 'workflow.png';
      link.click();
    } catch {
      window.alert('Unable to export PNG right now. Please try again.');
    }
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullscreen]);

  return (
    <div
      ref={containerRef}
      className={`flex w-full flex-col overflow-hidden border border-(--app-border) bg-(--surface-primary) ${
        isFullscreen
          ? 'fixed inset-0 z-50 h-screen w-screen rounded-none'
          : 'h-[85vh] w-full rounded-2xl'
      }`}
    >
      <WorkflowToolbar
        canUndo={canUndo}
        canRedo={canRedo}
        isFullscreen={isFullscreen}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onToggleFullscreen={handleToggleFullscreen}
        onDownloadPng={handleDownloadPng}
        onDownloadJson={handleDownloadJson}
      />

      <div className='flex min-h-0 flex-1'>
        {/* <NodePalette onDragStart={handlePaletteDragStart} /> */}
        <div ref={flowCanvasRef} className='min-h-0 min-w-0 flex-1'>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={handleNodesChange}
            onEdgesChange={handleEdgesChange}
            onConnect={handleConnect}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onInit={setReactFlowInstance}
            onNodeClick={(_, node) => setSelectedNodeId(node.id)}
            onPaneClick={() => setSelectedNodeId(null)}
            onNodeDragStop={handleNodeDragStop}
            onNodesDelete={handleNodesDelete}
            onEdgesDelete={handleEdgesDelete}
            defaultViewport={{ x: 0, y: 0, zoom: 0.9 }}
            minZoom={0.5}
            maxZoom={1.5}
          >
            <MiniMap />
            <Controls />
            <Background gap={16} size={1} />
          </ReactFlow>
        </div>

        <SidebarPanel
          selectedNode={selectedNode}
          triggerNameDraft={triggerNameDraft}
          onChangeTriggerName={handleChangeTriggerName}
          onApplyTriggerConfig={handleApplyTriggerConfig}
          onDragStart={handlePaletteDragStart}
          onCloseConfig={() => setSelectedNodeId(null)}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default WorkflowBuilder;
