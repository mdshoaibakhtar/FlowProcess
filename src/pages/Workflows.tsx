import DataTable from '../features/table/DataTable';
import { workflowColumns } from '../features/table/workflowColumns';
import { workflowData } from '../features/table/workflowData';
import WorkflowBuilder from '../features/workflow-builder/WorkflowBuilder';
import { useAppLayoutContext } from '../hooks/useAppLayoutContext';

const Workflows = () => {
  const { t } = useAppLayoutContext();
  return (
    <div className='w-full h-full'>
      <DataTable
        title='Workflows'
        data={workflowData}
        columns={workflowColumns}
        isDialog
        dialogComponent={<WorkflowBuilder />}
        dialogClass='w-full'
        createNewActionButtonLabel={t('Create New Workflow')}
      />
    </div>
  );
};

export default Workflows;
