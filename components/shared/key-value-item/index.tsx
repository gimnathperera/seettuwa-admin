import { getStringValue } from '@/utils/functions';
import { Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
  label: string;
  value: string | number | null | undefined | ReactNode | Date;
  color?: string;
  align?: 'left' | 'right' | 'center';
  defaultValue?: string;
};

const KeyValueItem: FC<Props> = ({ label, value, color, align = 'left', ...rest }) => {
  const formattedValue = getStringValue(value as string | number);

  return (
    <Grid
      container
      item
      flexDirection='row'
      justifyContent={align}
      gap={2}
      {...rest}
      sx={{ flexWrap: 'nowrap', overflow: 'hidden' }}
    >
      <Grid>
        <Typography fontWeight={600} {...(color && { color })} variant='body2'>
          {label}:
        </Typography>
      </Grid>

      <Grid>
        <Typography fontWeight={400} {...(color && { color })} variant='body2'>
          {formattedValue}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default KeyValueItem;
