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
import { DialogTitle } from '@headlessui/react';

type BaseRow = {
  workflowName?: string;
  templateName?: string;
};

type DataTableProps<T extends BaseRow> = {
  title?: string;
  data: T[];
  columns: ColumnDef<T>[];
  isDialog?: boolean;
  dialogComponent?: React.ReactNode;
  dialogClass?: string;
  onView?: (record: T) => void;
  onEdit?: (record: T) => void;
  onRun?: (record: T) => void;
  onDelete?: (record: T) => void;
  createNewActionButtonLabel?: string;
};

const DataTable = <T extends BaseRow>({
  data,
  columns,
  isDialog = false,
  dialogComponent,
  dialogClass,
  createNewActionButtonLabel = 'Create New',
}: DataTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState('');

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
    setSelectedRecord(name);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    setSelectedRecord('');
  };

  return (
    <div className='flex h-[84vh] flex-col gap-4'>
      {isDialog && (
        <DialogScreen
          isOpen={isOpen}
          onClose={handleCloseDialog}
          leftHeaderComponent={
            <div className='px-6 pb-2 pt-4 w-full flex'>
              <DialogTitle className='text-md font-normal text-slate-700'>
                {selectedRecord.length !== 0 ? selectedRecord : createNewActionButtonLabel}
              </DialogTitle>
            </div>
          }
          body={dialogComponent}
          className={dialogClass}
        />
      )}

      {/* <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {dashboard.kpis.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </section> */}

      {/* Header */}
      <div className='flex items-center justify-end'>
        {/* <h2 className='text-lg font-semibold text-(--text-primary)'>{title}</h2> */}

        <div className='flex gap-2'>
          <input
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            placeholder='Search...'
            className='w-64 shadow-sm rounded-lg border border-(--app-border) bg-(--surface-primary) px-4 py-2 text-sm text-(--text-primary) outline-none placeholder:text-(--text-secondary) focus:border-(--accent-strong)'
          />

          <button
            className='border text-(--accent-strong) px-4 rounded-md cursor-pointer shadow-sm text-sm'
            onClick={() => setIsOpen(true)}
          >
            {createNewActionButtonLabel}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='flex-1 overflow-auto rounded-lg border border-(--app-border) bg-(--surface-primary) shadow-sm'>
        <table className='w-full'>
          <thead className='sticky top-0 bg-(--accent-soft)'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className='border-b border-(--app-border)'>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className='w-[22%] cursor-pointer text-sm font-medium text-(--accent-strong)'
                  >
                    {header.id !== 'action' && (
                      <div className='flex items-center gap-2 px-3 py-4'>
                        <span>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </span>
                        <span>
                          {{
                            asc: '↑',
                            desc: '↓',
                          }[header.column.getIsSorted() as string] ?? ''}
                        </span>
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
                <tr
                  key={row.id}
                  className='border-b border-(--app-border) transition-colors hover:bg-(--surface-secondary)'
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`px-4 py-4 text-sm text-(--text-primary) ${
                        cell.column.id === 'action' ? '' : 'cursor-pointer'
                      }`}
                      onClick={() =>
                        cell.column.id !== 'action' &&
                        handleViewFlow(cell.row.original.workflowName)
                      }
                    >
                      {cell.column.id === 'action' ? (
                        <div className='flex gap-4'>
                          {/* <button
                            onClick={() => handleViewFlow?.(cell.row.original?.workflowName)}
                            className='rounded-md text-(--accent-strong) px-3 py-1.5 text-xs font-medium border w-36 transition cursor-pointer'
                            title='View'
                          >
                            View
                          </button> */}
                          <button
                            // onClick={() => onEdit?.(cell.row.original)}
                            onClick={() => handleViewFlow?.(cell.row.original?.workflowName)}
                            className='rounded-md bg-amber-100 px-6 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-200 cursor-pointer'
                            title='Edit'
                          >
                            Edit
                          </button>
                          <button
                            // onClick={() => onDelete?.(cell.row.original)}
                            className='rounded-md bg-red-100 px-6 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-200 cursor-pointer'
                            title='Delete'
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className='py-20 text-center text-sm text-(--text-secondary)'
                >
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
          className='cursor-pointer rounded-lg border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--text-primary)'
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
            className='cursor-pointer rounded-md border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--text-primary) disabled:opacity-40'
          >
            Prev
          </button>

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => table.setPageIndex(page - 1)}
              className={`cursor-pointer rounded-md px-3 py-2 text-sm ${
                pagination.pageIndex + 1 === page
                  ? 'bg-(--accent-strong) text-white'
                  : 'border border-(--app-border) bg-(--surface-primary) text-(--text-primary)'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='cursor-pointer rounded-md border border-(--app-border) bg-(--surface-primary) px-3 py-2 text-sm text-(--text-primary) disabled:opacity-40'
          >
            Next
          </button>
        </div>

        <p className='text-sm text-(--text-secondary)'>
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
      </div>
    </div>
  );
};

export default DataTable;
