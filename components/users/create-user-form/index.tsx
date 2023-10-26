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
import { DatePicker } from '@mui/x-date-pickers';

import { FC, useState } from 'react';
import AsyncButton from '@/components/shared/buttons/async-button';
import { DATE_FORMAT } from '@/utils/functions/date';
import SelectInput from '@/components/shared/select-input';
import {
  preferredLanguageOptions,
  userGenderOptions,
  userRoleOptions,
  userStatusOptions,
} from '@/types/user-management';
import FileUpload from '@/components/shared/file-upload';

const steps = ['Personal Info', 'Account Info', 'Summary'];

const PersonalInfo = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label='Full Name' variant='outlined' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Email' variant='outlined' type='email' fullWidth />
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
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField label='Mobile Number' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <DatePicker
          label={'Date of birth'}
          format={DATE_FORMAT}
          sx={{ width: '100%' }}
          slotProps={{ textField: { placeholder: DATE_FORMAT.toUpperCase() } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField label='Address' variant='outlined' fullWidth />
      </Grid>
    </Grid>
  );
};

const AccountInfo = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SelectInput
          label='Role'
          options={userRoleOptions}
          value='OWNER'
          onChange={(value): void => {
            console.log(value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Status'
          options={userStatusOptions}
          value='ACTIVE'
          onChange={(value): void => {
            console.log(value);
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <SelectInput
          label='Preferred Language'
          options={preferredLanguageOptions}
          value='ENGLISH'
          onChange={(value): void => {
            console.log(value);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          label='Gender'
          options={userGenderOptions}
          value='MALE'
          onChange={(value): void => {
            console.log(value);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FileUpload />
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
          {activeStep === 0 ? <PersonalInfo /> : activeStep === 1 ? <AccountInfo /> : <Summary />}
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
          {activeStep === steps.length - 1 ? (
            <AsyncButton size='small' variant='contained' color='primary' text='Create' />
          ) : (
            <Button size='small' variant='contained' color='primary' onClick={handleOnNextClick}>
              Next
            </Button>
          )}

          <Button size='small' variant='outlined' color='primary' onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Box>
  );
};

export default UserCreateForm;
