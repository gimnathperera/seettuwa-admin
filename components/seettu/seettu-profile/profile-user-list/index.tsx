import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { DataTable, UserRoleList, UserStatus } from '@/components';
import LetterAvatar from '@/components/shared/avatar';
import { users } from '@/data/users';
import { Box, Link } from '@mui/material';
import { GridCellParams, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import ParticipantAction from '../../seettu-form/participant-action-menu';
import { StyledCard } from './styles';

const ProfileSeettuList = (): JSX.Element => {
  const gridApiRef = useGridApiRef();

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

      renderCell: (): JSX.Element => {
        return (
          <Box flexDirection='row'>
            <ParticipantAction />
          </Box>
        );
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
          rows={users}
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

export default ProfileSeettuList;
