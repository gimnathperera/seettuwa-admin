import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { DataTable, SeettuStatus } from '@/components';
import { seettu } from '@/data/seettu';
import { formatCurrency, formatDate } from '@/utils/functions';
import { Box, LinearProgress, Link, Tooltip } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import { StyledCard } from './styles';

const SeettuUserList = (): JSX.Element => {
  const gridApiRef = useGridApiRef();

  const columns: GridColDef[] = [
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
  ];

  return (
    <StyledCard>
      <CardHeader
        title={<Typography variant='h5'>Seettu </Typography>}
        avatar='💸'
        titleTypographyProps={{ sx: { color: 'text.primary' } }}
      />
      <CardContent>
        <DataTable
          columns={columns}
          rows={seettu}
          serverSidePagination={{
            rowCount: 0,
            onPaginationModelChange: () => console.log('onPaginationModelChange'),
          }}
          gridApiRef={gridApiRef}
          rowsPerPage={5}
        />
      </CardContent>
    </StyledCard>
  );
};

export default SeettuUserList;
