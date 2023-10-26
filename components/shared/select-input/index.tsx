import React, { FC } from 'react';

import { Select, SelectChangeEvent, InputLabel, MenuItem, FormControl } from '@mui/material';

interface SelectInputProps {
  label: string;
  options: { value: string | number; label: string }[];
  value: string;
  onChange: (value: string | number) => void;
}

const SelectInput: FC<SelectInputProps> = ({ label, options, value, onChange, ...rest }) => {
  const handleChange = (event: SelectChangeEvent): void => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth {...rest}>
      <InputLabel id='select-label'>{label}</InputLabel>
      <Select labelId='select-label' value={value} label={label} onChange={handleChange}>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
