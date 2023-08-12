'use client';
// import { useQuery } from 'convex/react';
// import { api } from '@/convex/_generated/api';

import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { GridColDef, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableOuterCard from '@/components/shared/data-table/table-outer-card';
import PageContainer from '@/components/container/PageContainer';
import DataTable from '@/components/shared/data-table';
import TableFilterBar from '@/components/shared/data-table/table-filter-search-bar';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
  },
  {
    field: 'age',
    headerName: 'Age',
    flex: 1,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    flex: 1,
    field: 'actions',
    headerName: 'Actions',
    renderCell: (): JSX.Element => {
      return (
        <Box flexDirection='row'>
          <IconButton size='small'>
            <EditIcon />
          </IconButton>
          <IconButton size='small'>
            <DeleteIcon />
          </IconButton>
        </Box>
      );
    },
  },
];

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
  // const tasks = useQuery(api.tasks.get) || [];
  const gridApiRef = useGridApiRef();

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
