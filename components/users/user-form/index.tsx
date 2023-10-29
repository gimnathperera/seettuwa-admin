import { Box, Button, DialogActions, Step, StepButton, Stepper } from '@mui/material';

import AsyncButton from '@/components/shared/buttons/async-button';
import { User } from '@/types/user-management';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserFormSchema } from './scehma';
import Summary from './summary';
import PersonalInfo from './personal-info';
import AccountInfo from './account-info';

const steps = ['Personal Info', 'Account Info', 'Summary'];

type Props = {
  onCancel: () => void;
  userData?: User | null;
};

const UserCreateForm: FC<Props> = ({ userData, onCancel }) => {
  const [activeStep, setActiveStep] = useState(0);

  const { register, handleSubmit, control, watch } = useForm<User>({
    defaultValues: { ...userData },
    resolver: zodResolver(UserFormSchema),
  });

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
              <Summary watch={watch} />
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
