import React, { FC } from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { useController } from 'react-hook-form';
import { DATE_FORMAT } from '@/utils/functions/date';

interface Props {
  label: string;
  name: string;
  control: any;
}

const DateInput: FC<Props> = ({ label, name, control, ...rest }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <DatePicker
      label={label}
      format={DATE_FORMAT}
      sx={{ width: '100%' }}
      slotProps={{ textField: { placeholder: DATE_FORMAT.toUpperCase() } }}
      {...rest}
      value={value}
      onChange={onChange}
    />
  );
};

export default DateInput;
