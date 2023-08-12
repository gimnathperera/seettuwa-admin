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
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
    },
    '& .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-cell:focus-within': {
      outline: 'none',
    },
  }),
);
