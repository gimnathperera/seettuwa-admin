'use client';

import {
  DataTable,
  Modal,
  PageContainer,
  TableAction,
  TableFilterBar,
  TableOuterCard,
  UserRoleList,
  UserStatus,
} from '@/components';
import LetterAvatar from '@/components/shared/avatar';
import UserForm from '@/components/users/user-form';
import { users } from '@/data/users';
import { User } from '@/types/user-management';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid, Typography } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useRef, useState } from 'react';

const Users: FC = () => {
  const gridApiRef = useGridApiRef();
  const router = useRouter();
  const currentUser = useRef<User | null>(null);
  const [userCreateModalOpen, setUserCreateModalOpen] = useState(false);
  const [userEditModalOpen, setUserEditModalOpen] = useState(false);

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
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
            }}
            component={Link}
            href={`/user-management/users/${id}`}
          >
            <LetterAvatar fullName={fullName} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <Typography variant='body2' color='primary.main'>
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
        const { role } = row;

        return <UserRoleList role={role} />;
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

        const handleOnEdit = (): void => {
          currentUser.current = row;
          handleOnUserEditModalOpen();
        };

        const handleOnDelete = (): void => {
          alert('Delete');
        };

        return (
          <Box flexDirection='row'>
            <TableAction
              handleOnDelete={handleOnDelete}
              handleOnEdit={handleOnEdit}
              handleOnView={handleOnView}
            />
          </Box>
        );
      },
    },
  ];

  const handleOnUserCreateModalOpen = (): void => {
    setUserCreateModalOpen(true);
  };

  const handleOnUserCreateModalClose = (): void => {
    setUserCreateModalOpen(false);
  };

  const handleOnUserEditModalOpen = (): void => {
    setUserEditModalOpen(true);
  };

  const handleOnUserEditModalClose = (): void => {
    setUserEditModalOpen(false);
    currentUser.current = null;
  };

  const handleOnUserCreateSubmit = (): void => {
    console.log('Submitted');
  };

  return (
    <PageContainer title='සීට්ටුව Online | Users' description='Public users'>
      <Grid container flexDirection='column' gap={3}>
        <Grid item xs={12}>
          <Grid container flex='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h4' color='textSecondary'>
                All Users
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                onClick={handleOnUserCreateModalOpen}
                startIcon={<AddIcon />}
              >
                Create new user
              </Button>
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
      <Modal
        title='Create New User'
        submitButtonLabel='Create'
        onClose={handleOnUserCreateModalClose}
        onSubmit={handleOnUserCreateSubmit}
        isOpen={userCreateModalOpen}
        maxWidth='sm'
        hideFooter
      >
        <UserForm onCancel={handleOnUserCreateModalClose} />
      </Modal>

      <Modal
        title={currentUser.current && `Update User | ${currentUser.current?.fullName}`}
        submitButtonLabel='Update'
        onClose={handleOnUserEditModalClose}
        onSubmit={handleOnUserCreateSubmit}
        isOpen={userEditModalOpen}
        maxWidth='sm'
        hideFooter
      >
        <UserForm userData={currentUser.current} onCancel={handleOnUserCreateModalClose} />
      </Modal>
    </PageContainer>
  );
};

export default Users;
