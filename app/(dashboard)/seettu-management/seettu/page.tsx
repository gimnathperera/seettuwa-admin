'use client';

import {
  DataTable,
  IconButton,
  Modal,
  PageContainer,
  SeettuStatus,
  TableFilterBar,
  TableOuterCard,
} from '@/components';
import { seettu } from '@/data/seettu';
import { formatCurrency, formatDate } from '@/utils/functions';
import { Box, Button, Grid, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import SeettuCreateForm from '@/components/seettu/seettu-form';

const Seettu: FC = () => {
  const gridApiRef = useGridApiRef();
  const router = useRouter();
  const [seettuCreateModalOpen, setSeettuCreateModalOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { name, id } = row;

        return (
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
            component={Link}
            href={`/seettu-management/seettu/${id}`}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography variant='body2' color='primary.main'>
                {name}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
    {
      field: 'duration',
      headerName: 'Duration',
      flex: 0.8,
    },

    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { startDate } = row;

        return (
          <Typography variant='body2' color='textPrimary'>
            {formatDate(startDate)}
          </Typography>
        );
      },
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { endDate } = row;

        return (
          <Typography variant='body2' color='textPrimary'>
            {formatDate(endDate)}
          </Typography>
        );
      },
    },
    {
      field: 'seettuType',
      headerName: 'Type',
      flex: 0.5,
    },
    {
      field: 'userCount',
      headerName: 'User Count',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { userCount } = row;

        return (
          <Typography variant='body2' color='textPrimary'>
            👥 {userCount}
          </Typography>
        );
      },
    },
    {
      field: 'amount',
      headerName: 'Capital',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { amount } = row;

        return (
          <Box>
            <Typography variant='body2' color='textPrimary'>
              {formatCurrency(amount)}
            </Typography>
            <Tooltip title={formatCurrency(amount)}>
              <LinearProgress
                variant='determinate'
                color='secondary'
                value={20}
                sx={{
                  borderRadius: 5,
                  cursor: 'pointer',
                }}
              />
            </Tooltip>
          </Box>
        );
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ row }: GridCellParams): JSX.Element => {
        const { status } = row;

        return <SeettuStatus status={status} />;
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
          alert('Edit');
        };

        const handleOnDelete = (): void => {
          alert('Delete');
        };

        return (
          <Box flexDirection='row'>
            {/* <TableAction /> */}
            <IconButton
              size='small'
              color='warning'
              icon='📂'
              tooltip='View'
              onClick={handleOnView}
            />
            <IconButton size='small' color='info' icon='🖊' tooltip='Edit' onClick={handleOnEdit} />
            <IconButton
              size='small'
              color='error'
              icon='🗑️'
              tooltip='Delete'
              onClick={handleOnDelete}
            />
          </Box>
        );
      },
    },
  ];

  const handleOnSeettuCreateModalOpen = (): void => {
    setSeettuCreateModalOpen(true);
  };

  const handleOnSeettuCreateModalClose = (): void => {
    setSeettuCreateModalOpen(false);
  };

  const handleOnSeettuCreateSubmit = (): void => {
    console.log('Submitted');
  };

  return (
    <PageContainer title='සීට්ටුව Online | Seettu' description='Public users'>
      <Grid container flexDirection='column' gap={3}>
        <Grid item xs={12}>
          <Grid container flex='row' justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h4' color='textSecondary'>
                All Seettu
              </Typography>
            </Grid>
            <Grid item>
              <Button variant='contained' onClick={handleOnSeettuCreateModalOpen}>
                📝 Create new seettu
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
                rows={seettu}
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
        title='Create New Seettu'
        submitButtonLabel='Create'
        onClose={handleOnSeettuCreateModalClose}
        onSubmit={handleOnSeettuCreateSubmit}
        isOpen={seettuCreateModalOpen}
        maxWidth='sm'
        hideFooter
      >
        <SeettuCreateForm onCancel={handleOnSeettuCreateModalClose} />
      </Modal>
    </PageContainer>
  );
};

export default Seettu;
