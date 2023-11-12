import { Grid, TextField } from '@mui/material';
import { DateInput } from '@/components';

import { UseFormRegister } from 'react-hook-form';
import { Seettu, seettuStatusOptions, seettuTypeOptions } from '@/types/seettu-management';
import SelectInput from '@/components/shared/select-input';

export type TabProps = {
  register: UseFormRegister<Seettu>;
  control: any;
};

const PersonalInfo = ({ register, control }: TabProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Seettu Name' variant='outlined' fullWidth {...register('seettuName')} />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Status'
          options={seettuStatusOptions}
          {...register('status')}
          control={control}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Type'
          options={seettuTypeOptions}
          {...register('type')}
          control={control}
        />
      </Grid>

      <Grid item xs={6}>
        <DateInput label='Start Date' {...register('startDate')} control={control} />
      </Grid>

      <Grid item xs={6}>
        <DateInput label='End Date' {...register('endDate')} control={control} />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label='Description'
          multiline
          variant='outlined'
          fullWidth
          minRows={4}
          {...register('description')}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
