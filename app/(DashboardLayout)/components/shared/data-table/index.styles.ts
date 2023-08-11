import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

interface DataGridStyledProps {
  headerBackgroundColor?: string | null;
}

export const DataGridStyled = styled(DataGrid)<DataGridStyledProps>(
  ({ headerBackgroundColor }) => ({
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: headerBackgroundColor || '#F6FAFF',
    },
    '&.borderlessGrid .MuiDataGrid-cell': {
      borderBottom: '1px solid #e0e0e0',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
    },
  }),
);
