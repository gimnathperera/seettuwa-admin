import { useState } from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FilterButton, FilterContainer } from './index.styles';

export interface SelectOption {
  key: string;
  value: string;
}

export interface Filter {
  filterKey: SelectOption;
  filterOptions: SelectOption[];
  filterType?: 'SELECT' | 'INPUT' | 'DATE' | 'DATE_RANGE';
}

interface FilterBy {
  filterKey: string;
  filterValue: string;
}

interface Props {
  filters: Filter[];
  onFilterBy: (filterBy: FilterBy) => void;
}

const FilterBy = ({ filters, onFilterBy }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Filter>(filters?.[0]);
  const [filterValue, setFilterValue] = useState('');

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (): void => {
    setAnchorEl(null);
  };

  const handleFilterKeyChange = (event: SelectChangeEvent): void => {
    const selectedFilter = filters?.find(
      ({ filterKey: { value } }: Filter) => value === event.target.value,
    );
    selectedFilter && setSelectedFilter(selectedFilter);
  };

  const handleFilterValueChange = (event: SelectChangeEvent): void => {
    setFilterValue(event.target.value);
  };

  const handleOnFilterByClick = (): void => {
    onFilterBy({ filterKey: selectedFilter?.filterKey?.value, filterValue });
    handleFilterClose();
    resetFilter();
  };

  const resetFilter = (): void => {
    setSelectedFilter(filters?.[0]);
    setFilterValue('');
  };

  return (
    <>
      <FilterButton onClick={handleFilterClick}>🔬</FilterButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <FilterContainer>
          <Typography variant='body1'>Filter results with</Typography>

          <FormControl sx={{ mt: 1 }} size='small'>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={selectedFilter?.filterKey?.value}
              onChange={handleFilterKeyChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {filters?.map(({ filterKey: { key, value } }: Filter) => (
                <MenuItem value={value} key={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size='small'>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={filterValue}
              onChange={handleFilterValueChange}
              disabled={!selectedFilter?.filterOptions?.length}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {selectedFilter?.filterOptions?.map(({ key, value }: SelectOption) => (
                <MenuItem value={value} key={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button variant='contained' size='small' onClick={handleOnFilterByClick}>
            Apply filter
          </Button>
        </FilterContainer>
      </Popover>
    </>
  );
};

export default FilterBy;
