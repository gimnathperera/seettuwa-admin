'use client';

import { FC } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import {
  TableOuterCard,
  PageContainer,
  DataTable,
  TableFilterBar,
  UserRoleList,
} from '@/components';
import Link from 'next/link';
import LetterAvatar from '@/components/shared/avatar';
import { users } from '@/data/users';
import UserStatus from '@/components/users/user-status';

const Users: FC = () => {
  const gridApiRef = useGridApiRef();
  const router = useRouter();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'fullName',
      headerName: 'Full name',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { fullName, id } = row;

        return (
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
            component={Link}
            href={`/user-management/users/${id}`}
          >
            <LetterAvatar fullName={fullName} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography variant='body2' color='textPrimary'>
                {fullName}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },

    {
      field: 'roles',
      headerName: 'Roles',
      flex: 0.5,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { roles } = row;

        return <UserRoleList roles={roles} />;
      },
    },

    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
    },

    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { status } = row;

        return <UserStatus status={status} />;
      },
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
            <IconButton size='small' color='warning' onClick={handleOnView}>
              📂
            </IconButton>
            <IconButton size='small' color='info'>
              🖊
            </IconButton>
            <IconButton size='small' color='error'>
              🗑️
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
                rows={users}
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
