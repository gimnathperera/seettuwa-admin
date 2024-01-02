import { Login } from '@/types/user-management';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { LoginSchema } from './schema';

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const defaultValues: Login = {
  email: '',
  password: '',
};

const AuthLogin = ({ title, subtext }: loginType): JSX.Element => {
  const router = useRouter();

  const { register } = useForm<Login>({
    defaultValues,
    resolver: zodResolver(LoginSchema),
  });

  const onLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    router.push('/');
  };

  return (
    <form onSubmit={onLoginSubmit}>
      {title ? (
        <Typography fontWeight='700' variant='h2' mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <TextField label='Email' multiline variant='outlined' fullWidth {...register('email')} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Password'
            multiline
            variant='outlined'
            fullWidth
            {...register('password')}
          />
        </Grid>
      </Grid>

      <Box mt={4}>
        <Button color='primary' variant='contained' size='large' fullWidth type='submit'>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default AuthLogin;
