import DataTable from '../features/table/DataTable';
import { workflowColumns } from '../features/table/workflowColumns';
import { workflowData } from '../features/table/workflowData';

const Users = () => {
  return (
    <div className='w-full h-full'>
      <DataTable title='Users' data={workflowData} columns={workflowColumns} />
    </div>
  );
};

export default Users;
