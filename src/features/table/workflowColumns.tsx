import type { ColumnDef } from '@tanstack/react-table';
import type { Workflow } from './workflowData';

export const workflowColumns: ColumnDef<Workflow>[] = [
  {
    accessorKey: 'workflowName',
    header: 'Workflow Name',
    cell: ({ row }) => <span className='font-medium'>{row.original.workflowName}</span>,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => <span>{row.original.createdAt}</span>,
  },
  {
    accessorKey: 'lastModifiedBy',
    header: 'Last Modified By',
    cell: ({ row }) => <span>{row.original.lastModifiedBy}</span>,
  },
  {
    accessorKey: 'lastModifiedDate',
    header: 'Last Modified Date',
    cell: ({ row }) => <span>{row.original.lastModifiedDate}</span>,
  },
  {
    accessorKey: 'action',
    header: '',
  },
];
