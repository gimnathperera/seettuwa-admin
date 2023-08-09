import TuneIcon from '@mui/icons-material/Tune';
import { FilterButton, FilterContainer } from './index.styles';
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

type Props = {};

const FilterBy = ({}: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [filterKey, setFilterKey] = useState('');
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
    setFilterKey(event.target.value);
  };

  const handleFilterValueChange = (event: SelectChangeEvent): void => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <FilterButton onClick={handleFilterClick}>
        <TuneIcon />
      </FilterButton>

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
              value={filterKey}
              onChange={handleFilterKeyChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Status</MenuItem>
              <MenuItem value={20}>Role</MenuItem>
            </Select>
          </FormControl>
          <FormControl size='small'>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={filterValue}
              onChange={handleFilterValueChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Inactive</MenuItem>
              <MenuItem value={20}>Pending</MenuItem>
            </Select>
          </FormControl>

          <Button variant='contained' size='small'>
            Apply filter
          </Button>
        </FilterContainer>
      </Popover>
    </>
  );
};

export default FilterBy;
