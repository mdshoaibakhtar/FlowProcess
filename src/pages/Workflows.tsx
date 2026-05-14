import WorkflowBuilder from '../features/workflow-builder/WorkflowBuilder';

const Workflows = () => {
  return (
    <div className='space-y-5'>
      <div>
        <h1 className='text-2xl font-semibold text-(--app-text) sm:text-3xl'>Workflow Builder</h1>
        <p className='mt-2 text-sm text-(--muted-text) sm:text-base'>
          Design and connect approval nodes to automate your process pipeline.
        </p>
      </div>

      <WorkflowBuilder />
    </div>
  );
};

export default Workflows;
