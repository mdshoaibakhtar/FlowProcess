import type { ColumnDef } from '@tanstack/react-table';
import type { Workflow } from './workflowData';

export const workflowColumns: ColumnDef<Workflow>[] = [
  {
    accessorKey: 'workflowName',
    header: 'Workflow Name',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
  {
    accessorKey: 'lastModifiedBy',
    header: 'Last Modified By',
  },
  {
    accessorKey: 'lastModifiedDate',
    header: 'Last Modified Date',
  },
];
