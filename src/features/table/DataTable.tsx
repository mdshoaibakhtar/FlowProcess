import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
  type SortingState,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import DialogScreen from '../../components/common/DialogScreen';
import WorkflowBuilder from '../workflow-builder/WorkflowBuilder';

type DataTableProps<T> = {
  title?: string;
  data: T[];
  columns: ColumnDef<T>[];
};

const DataTable = <T,>({ title = 'Table', data, columns }: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState('');

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pages = useMemo(
    () => Array.from({ length: table.getPageCount() }, (_, index) => index + 1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getPageCount()],
  );

  const handleViewFlow = (name: string) => {
    setSelectedFlow(name);
    setIsOpen(true);
  };

  return (
    <div className='flex h-[85vh] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
      <DialogScreen
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={selectedFlow ?? 'Workflow'}
        body={<WorkflowBuilder />}
        width='full'
      />
      {/* Header */}
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-slate-900'>{title}</h2>

        <div className='flex items-center gap-3'>
          <input
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            placeholder='Search...'
            className='w-64 rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400'
          />
        </div>
      </div>

      {/* Table */}
      <div className='flex-1 overflow-auto rounded-lg border border-slate-100'>
        <table className='w-full text'>
          <thead className='sticky top-0 bg-slate-50'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='border-b border-slate-200'>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className='cursor-pointer text-sm font-medium text-slate-600 w-[22%]'
                  >
                    {header.id !== 'action' && (
                      <div className='flex items-center gap-2 px-3 py-4'>
                        <p>{flexRender(header.column.columnDef.header, header.getContext())}</p>
                        <p>
                          {{
                            asc: '↑',
                            desc: '↓',
                          }[header.column.getIsSorted() as string] ?? ''}
                        </p>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className='border-b border-slate-100 hover:bg-slate-50'>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className='px-4 py-4 text-sm text-slate-700 cursor-pointer'
                      onClick={() => handleViewFlow(cell.row.original.workflowName ?? '')}
                    >
                      {cell.column.id === 'action' ? (
                        <button
                          onClick={() => handleViewFlow(cell.row.original.workflowName ?? '')}
                          className='flex items-center justify-center gap-2 rounded-md bg-(--accent-soft) px-3 py-1 text-sm text-(--accent-strong) hover:bg-(--accent-soft) w-full cursor-pointer transition'
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </button>
                      ) : (
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className='py-20 text-center text-sm text-slate-500'>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className='mt-5 flex items-center justify-between'>
        <select
          value={pagination.pageSize}
          onChange={(event) => table.setPageSize(Number(event.target.value))}
          className='rounded-lg border border-slate-200 px-3 py-2 text-sm cursor-pointer'
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        <div className='flex items-center gap-2'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='rounded-md border px-3 py-2 text-sm disabled:opacity-40 cursor-pointer'
          >
            Prev
          </button>

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => table.setPageIndex(page - 1)}
              className={`rounded-md px-3 py-2 text-sm cursor-pointer ${
                pagination.pageIndex + 1 === page
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='rounded-md border px-3 py-2 text-sm disabled:opacity-40 cursor-pointer'
          >
            Next
          </button>
        </div>

        <p className='text-sm text-slate-500'>
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
      </div>
    </div>
  );
};

export default DataTable;
