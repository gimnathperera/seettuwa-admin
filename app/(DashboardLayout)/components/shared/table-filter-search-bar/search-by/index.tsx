import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SearchBy = (): JSX.Element => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='demo-select-small-label'>Search By</InputLabel>
      <Select
        labelId='demo-select-small-label'
        value={age}
        label='Search By'
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Name</MenuItem>
        <MenuItem value={20}>Email</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SearchBy;
