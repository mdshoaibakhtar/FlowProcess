import type { ColumnDef } from '@tanstack/react-table';

type User = {
  name: string;
  email: string;
  role: string;
};

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
];
