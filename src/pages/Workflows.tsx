import WorkflowBuilder from '../features/workflow-builder/WorkflowBuilder';
import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

const Workflows = () => {
  const { t } = useAppLayoutContext();

  return (
    <div className='space-y-5'>
      <div>
        <h1 className='text-2xl font-semibold text-(--app-text) sm:text-3xl'>
          {t('workflows_title')}
        </h1>
        <p className='mt-2 text-sm text-(--muted-text) sm:text-base'>
          {t('workflows_description')}
        </p>
      </div>

      <WorkflowBuilder />
    </div>
  );
};

export default Workflows;
