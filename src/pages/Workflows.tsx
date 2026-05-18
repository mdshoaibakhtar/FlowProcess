import DataTable from '../features/table/DataTable';
import { workflowColumns } from '../features/table/workflowColumns';
import { workflowData, type Workflow } from '../features/table/workflowData';

const Workflows = () => {
  return (
    <div className='w-full h-full'>
      <DataTable<Workflow> title='Workflows' data={workflowData} columns={workflowColumns} />
    </div>
  );
};

export default Workflows;
