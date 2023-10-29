import IconButton from '@/components/shared/buttons/icon-button';
import { User } from '@/types/user-management';
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { DateInput } from '@/components';

import { UseFormRegister } from 'react-hook-form';

export type TabProps = {
  register: UseFormRegister<User>;
  control: any;
};

const PersonalInfo = ({ register, control }: TabProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Full Name' variant='outlined' fullWidth {...register('fullName')} />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Email' variant='outlined' type='email' fullWidth {...register('email')} />
      </Grid>
      <Grid item xs={6}>
        <FormControl variant='outlined' fullWidth>
          <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton icon='🔄' onClick={(): void => {}} tooltip='Generate a password' />
              </InputAdornment>
            }
            label='Password'
            {...register('password')}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label='Mobile Number' fullWidth {...register('phoneNumber')} />
      </Grid>
      <Grid item xs={6}>
        <DateInput label='Date of birth' {...register('dob')} control={control} />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Address' variant='outlined' fullWidth {...register('address')} />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
