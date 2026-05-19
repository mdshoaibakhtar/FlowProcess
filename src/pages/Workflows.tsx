import DataTable from '../features/table/DataTable';
import { workflowColumns } from '../features/table/workflowColumns';
import { workflowData } from '../features/table/workflowData';
import WorkflowBuilder from '../features/workflow-builder/WorkflowBuilder';

const Workflows = () => {
  return (
    <div className='w-full h-full'>
      <DataTable
        title='Workflows'
        data={workflowData}
        columns={workflowColumns}
        isDialog
        dialogComponent={<WorkflowBuilder />}
        dialogClass='w-full'
      />
    </div>
  );
};

export default Workflows;
