import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SearchInput, StyledIconButton } from './index.styles';
import { SelectOption } from '../filter-by';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBy {
  searchKey: string;
  searchValue: string;
}

interface Props {
  searchOptions: SelectOption[];
  onSearchBy: (searchBy: SearchBy) => void;
  placeholder?: string;
}

const SearchBy = ({ searchOptions, placeholder, onSearchBy }: Props): JSX.Element => {
  const [searchKey, setSearchKey] = useState(searchOptions?.[0]?.value || '');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchKeyChange = (event: SelectChangeEvent): void => {
    setSearchKey(event.target.value);
  };

  const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleOnSearchByClick = (searchBy: SearchBy): void => {
    if (!searchBy.searchKey || !searchBy.searchValue) return;
    onSearchBy(searchBy);
    resetSearchBy();
  };

  const resetSearchBy = (): void => {
    setSearchValue('');
    setSearchKey('');
  };

  return (
    <>
      <StyledIconButton onClick={(): void => handleOnSearchByClick({ searchKey, searchValue })}>
        <SearchIcon />
      </StyledIconButton>

      <SearchInput
        placeholder={placeholder || 'Search'}
        onChange={handleSearchValueChange}
        value={searchValue}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id='demo-select-small-label'>Search By</InputLabel>
        <Select
          labelId='demo-select-small-label'
          value={searchKey}
          label='Search By'
          onChange={handleSearchKeyChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {searchOptions?.map(({ key, value }) => (
            <MenuItem value={value} key={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SearchBy;
