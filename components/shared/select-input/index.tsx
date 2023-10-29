import React, { FC } from 'react';

import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { useController } from 'react-hook-form';

interface Props {
  label: string;
  options: { value: string | number; label: string }[];
  name: string;
  control: any;
}

const SelectInput: FC<Props> = ({ label, options, name, control, ...rest }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <FormControl fullWidth {...rest}>
      <InputLabel id='select-label'>{label}</InputLabel>
      <Select labelId='select-label' label={label} value={value} onChange={onChange}>
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
