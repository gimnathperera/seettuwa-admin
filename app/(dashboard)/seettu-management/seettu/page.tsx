'use client';

import { FC } from 'react';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/navigation';
import {
  TableOuterCard,
  PageContainer,
  DataTable,
  TableFilterBar,
  SeettuStatus,
} from '@/components';
import Link from 'next/link';
import { seettu } from '@/data/seettu';

import { formatCurrency, formatDate } from '@/utils/functions';

const Seettu: FC = () => {
  const gridApiRef = useGridApiRef();
  const router = useRouter();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
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
            href={`/user-management/users/${id}`}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography variant='body2' color='textPrimary'>
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
            <LinearProgress
              variant='determinate'
              color='secondary'
              value={20}
              sx={{
                borderRadius: 5,
              }}
            />
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
              <Button variant='contained'>📝 Create new seettu</Button>
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
    </PageContainer>
  );
};

export default Seettu;
