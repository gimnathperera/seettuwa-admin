import * as React from 'react';
import {
  GridApi,
  GridCallbackDetails,
  GridColDef,
  GridPaginationModel,
  GridValidRowModel,
  gridFilteredTopLevelRowCountSelector,
  gridPageSizeSelector,
  gridPaginationModelSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import { tableConfig } from '@/config';
import { DataGridStyled } from './index.styles';

interface Props {
  rows: GridValidRowModel[];
  columns: GridColDef<GridValidRowModel, unknown, unknown>[];
  onPageChange?: (page: number, perPage: number) => void;
  serverSidePagination?: {
    rowCount: number;
    onPaginationModelChange: (
      model: GridPaginationModel,
      details: GridCallbackDetails<any>,
    ) => void;
  };
  gridApiRef?: React.MutableRefObject<GridApi>;
  rowsPerPage?: number;
}

const DataGridDemo: React.FC<Props> = ({
  rows,
  columns,
  serverSidePagination,
  gridApiRef,
  rowsPerPage = tableConfig.ROWS_PER_PAGE,
}) => {
  const hasPagination = Boolean(serverSidePagination);

  return (
    <DataGridStyled
      apiRef={gridApiRef}
      rows={rows}
      columns={columns}
      autoHeight
      disableRowSelectionOnClick
      disableColumnMenu
      hideFooter={!hasPagination}
      onPaginationModelChange={serverSidePagination?.onPaginationModelChange}
      initialState={{
        pagination: {
          paginationModel: { pageSize: rowsPerPage },
        },
      }}
      slots={{
        pagination: () => <CustomPagination />,
      }}
    />
  );
};

const CustomPagination = (): JSX.Element => {
  const getPageCount = (rowCount: number, pageSize: number): number => {
    return Math.ceil(rowCount / pageSize);
  };

  const apiRef = useGridApiContext();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const rootProps = useGridRootProps();
  const pageCount = getPageCount(rootProps.rowCount ?? visibleTopLevelRowCount, pageSize);

  return (
    <Pagination
      count={pageCount}
      page={paginationModel.page + 1}
      onChange={(_event, value): void => {
        apiRef.current.setPage(value - 1);
      }}
      color='primary'
    />
  );
};

export default DataGridDemo;
