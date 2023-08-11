import * as React from 'react';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { DataGridStyled } from './index.styles';

interface Props {
  rows: GridValidRowModel[];
  columns: GridColDef<GridValidRowModel, unknown, unknown>[];
}

const DataGridDemo: React.FC<Props> = ({ rows, columns }) => {
  return (
    <DataGridStyled
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 8,
          },
        },
      }}
      autoHeight
      disableRowSelectionOnClick
      disableColumnMenu
    />
  );
};

export default DataGridDemo;
