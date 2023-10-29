import IconButton from '@/components/shared/buttons/icon-button';
import KeyValueItem from '@/components/shared/key-value-item';
import {
  Stepper,
  StepButton,
  Step,
  Box,
  TextField,
  InputLabel,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import { DialogActions } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import { FC, useState } from 'react';
import AsyncButton from '@/components/shared/buttons/async-button';
import SelectInput from '@/components/shared/select-input';
import {
  preferredLanguageOptions,
  userGenderOptions,
  userRoleOptions,
  userStatusOptions,
} from '@/types/user-management';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { DateInput, FileInput } from '@/components';

const steps = ['Personal Info', 'Account Info', 'Summary'];

type PersonalInfoProps = {
  register: UseFormRegister<FieldValues>;
  control: any;
};

type AccountInfoProps = {
  register: UseFormRegister<FieldValues>;
  control: any;
};

const PersonalInfo = ({ register, control }: PersonalInfoProps): JSX.Element => {
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

const AccountInfo = ({ register, control }: AccountInfoProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SelectInput
          label='Role'
          options={userRoleOptions}
          {...register('role')}
          control={control}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Status'
          options={userStatusOptions}
          {...register('status')}
          control={control}
        />
      </Grid>

      <Grid item xs={6}>
        <SelectInput
          label='Preferred Language'
          options={preferredLanguageOptions}
          {...register('preferredLanguage')}
          control={control}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Gender'
          options={userGenderOptions}
          {...register('gender')}
          control={control}
        />
      </Grid>
      <Grid item xs={12}>
        <FileInput />
      </Grid>
    </Grid>
  );
};

const Summary = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Personal Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Full Name' value='John Doe' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Email' value='jhon@gmail.com' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Password' value='*******' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Mobile Number' value='555-456-7890' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem
          label='Address'
          value='234 Elm Street Suite 567 Fictionalville, CA 12345 USA'
        />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Date of birth' value='1998-05-01' />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Account Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Role' value='Owner' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Status' value='Active' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Gender' value='Male' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Preferred Language' value='English' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem
          label='Profile picture'
          value={
            <Avatar variant='rounded'>
              <PersonIcon />
            </Avatar>
          }
        />
      </Grid>
    </Grid>
  );
};

type Props = {
  onCancel: () => void;
};

const UserCreateForm: FC<Props> = ({ onCancel }) => {
  const [activeStep, setActiveStep] = useState(0);

  const { register, handleSubmit, control } = useForm();

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleOnNextClick = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleOnPreviousClick = (): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Box
        sx={{
          width: '100%',
          minHeight: '26rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton color='inherit' onClick={handleStep(index)} sx={{ py: '16px' }}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: '2rem' }}>
            {activeStep === 0 ? (
              <PersonalInfo register={register} control={control} />
            ) : activeStep === 1 ? (
              <AccountInfo register={register} control={control} />
            ) : (
              <Summary />
            )}
          </Box>
        </Box>

        <DialogActions
          sx={{
            justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
            gap: 1,
            pt: '2rem',
            px: 0,
          }}
        >
          {activeStep !== 0 && (
            <Button size='small' variant='outlined' color='primary' onClick={handleOnPreviousClick}>
              Back
            </Button>
          )}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <Button size='small' variant='outlined' color='primary' onClick={onCancel}>
              Cancel
            </Button>

            {activeStep === steps.length - 1 ? (
              <AsyncButton
                size='small'
                variant='contained'
                color='primary'
                text='Create'
                type='submit'
              />
            ) : (
              <Button size='small' variant='contained' color='primary' onClick={handleOnNextClick}>
                Next
              </Button>
            )}
          </Box>
        </DialogActions>
      </Box>
    </form>
  );
};

export default UserCreateForm;
