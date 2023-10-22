import { FC, ReactNode } from 'react';
import { Grid, Typography } from '@mui/material';
import { getStringValue } from '@/utils/functions';

type Props = {
  label: string;
  value: string | number | null | undefined | ReactNode;
  color?: string;
  align?: 'left' | 'right' | 'center';
};

const KeyValueItem: FC<Props> = ({ label, value, color, align = 'left', ...rest }) => {
  const formattedValue =
    typeof value !== 'string' && typeof value !== 'number'
      ? value
      : getStringValue(value as string | number);

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
