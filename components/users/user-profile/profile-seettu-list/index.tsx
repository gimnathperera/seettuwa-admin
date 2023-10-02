import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { DataTable } from '@/components';
import { Box, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { GridColDef, GridValueGetterParams, useGridApiRef } from '@mui/x-data-grid';
import { StyledCard } from './styles';

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
      // TODO: add tooltips for the actions and update the icon colors
      return (
        <Box flexDirection='row'>
          <IconButton size='small'>
            <VisibilityOutlinedIcon />
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

const ProfileSeettuList = (): JSX.Element => {
  const gridApiRef = useGridApiRef();

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
          rows={rows}
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
