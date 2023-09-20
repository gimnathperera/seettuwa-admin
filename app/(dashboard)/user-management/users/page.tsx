'use client';

import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useRouter } from 'next/navigation';
import { TableOuterCard, PageContainer, DataTable, TableFilterBar } from '@/components';
import Link from 'next/link';
import LetterAvatar from '@/components/shared/avatar';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: '-' },
  { id: 6, lastName: 'Melisandre', firstName: '-', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Users: React.FC = () => {
  const gridApiRef = useGridApiRef();
  const router = useRouter();

  const renderClient = (fullName: string): JSX.Element => {
    return <LetterAvatar fullName={fullName} />;
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
      field: 'fullName',
      headerName: 'Full name',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { firstName, lastName, id } = row;

        return (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {renderClient(`${firstName} ${lastName}`)}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Link href={`/user-management/users/${id}`}>{`${firstName} ${lastName}`}</Link>
            </Box>
          </Box>
        );
      },
    },

    {
      field: 'age',
      headerName: 'Age',
      flex: 1,
    },

    {
      flex: 1,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const handleOnView = (): void => {
          router.push(`/user-management/users/${row.id}`);
        };

        return (
          <Box flexDirection='row'>
            <IconButton size='small' onClick={handleOnView}>
              <VisibilityOutlinedIcon />
            </IconButton>
            <IconButton size='small'>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton size='small'>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <PageContainer title='Users' description='Public users'>
      <Grid container flexDirection='column' gap={3}>
        <Grid item xs={12}>
          <Grid container flex='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h4' color='textSecondary'>
                Public Users
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained'>Create a new user</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TableFilterBar
            placeholder='Search public users'
            searchOptions={[
              { key: 'Name', value: 'name' },
              { key: 'Email', value: 'email' },
            ]}
            filterOptions={[
              {
                filterKey: { key: 'Status', value: 'status' },
                filterOptions: [
                  { key: 'Active', value: 'active' },
                  { key: 'Inactive', value: 'inactive' },
                  { key: 'Pending', value: 'pending' },
                ],
                filterType: 'SELECT',
              },
              {
                filterKey: { key: 'Role', value: 'role' },
                filterOptions: [
                  { key: 'Admin', value: 'admin' },
                  { key: 'Owner', value: 'owner' },
                  { key: 'Visitor', value: 'visitor' },
                ],
                filterType: 'SELECT',
              },
            ]}
          />
        </Grid>

        <Grid item xs={12}>
          <TableOuterCard
            middleContent={
              <DataTable
                columns={columns}
                rows={rows}
                serverSidePagination={{
                  rowCount: 0,
                  onPaginationModelChange: () => console.log('onPaginationModelChange'),
                }}
                gridApiRef={gridApiRef}
              />
            }
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Users;
