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
} from '@mui/material';
import { DialogActions } from '@mui/material';

import { FC, useState } from 'react';

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
        <TextField label='Date of birth' fullWidth />
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
        <TextField label='Role' variant='outlined' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Status' variant='outlined' fullWidth />
      </Grid>

      <Grid item xs={6}>
        <TextField label='Preferred Language' fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField label='Gender' fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type='file'
          variant='outlined'
          fullWidth
          inputProps={{
            accept: 'image/*',
            multiple: false,
          }}
        />
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
        <KeyValueItem label='Full Name' value='John Doe Doe' />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Email' value='jhon@gm' />
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

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '24rem',
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
          {
            {
              0: <PersonalInfo />,
              1: <AccountInfo />,
              2: <Summary />,
            }[activeStep]
          }
        </Box>
      </Box>

      <DialogActions
        sx={{
          justifyContent: 'flex-end',
          gap: 1,
          pt: '2rem',
          px: 0,
        }}
      >
        <Button size='small' variant='contained' color='primary'>
          Next
        </Button>
        <Button size='small' variant='outlined' color='primary' onClick={onCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Box>
  );
};

export default UserCreateForm;
