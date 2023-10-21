import { FC } from 'react';
import { LoadingButton } from '@mui/lab';
import { ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  text: string;
  isLoading?: boolean;
  isValid?: boolean;
}

const AsyncButton: FC<Props> = ({ text, isLoading, isValid = true, ...rest }) => {
  const disabled = !isValid || isLoading;

  return (
    <LoadingButton
      type='submit'
      variant='contained'
      size='small'
      loading={isLoading}
      disabled={disabled}
      {...rest}
    >
      {text}
    </LoadingButton>
  );
};

export default AsyncButton;
