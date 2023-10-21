import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const UserCreateForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <>
          <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Step {activeStep + 1}</Typography>
        </>
      </div>
    </Box>
  );
};

export default UserCreateForm;
