import KeyValueItem from '@/components/shared/key-value-item';
import { Seettu } from '@/types/seettu-management';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { UseFormWatch } from 'react-hook-form';

type Props = {
  watch: UseFormWatch<Seettu>;
};

const Summary: FC<Props> = ({ watch }): JSX.Element => {
  const [seettuName, status, type, startDate, endDate, description, totalAmount] = watch([
    'seettuName',
    'status',
    'type',
    'startDate',
    'endDate',
    'description',
    'totalAmount',
  ]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Basic Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Seettu Name' value={seettuName} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Status' value={status} defaultValue='-' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Type' value={type} defaultValue='-' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Start Date' value={startDate} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='End Date' value={endDate} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Description' value={description} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Total amount' value={totalAmount} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Duration' value={totalAmount} />
      </Grid>

      <Grid item xs={12} mt={2}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Participants Info
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <KeyValueItem label='Number of participants' value={description} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Price per person' value={description} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Seettu Owner' value={description} />
      </Grid>
    </Grid>
  );
};

export default Summary;
