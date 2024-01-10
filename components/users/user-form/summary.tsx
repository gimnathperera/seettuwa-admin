import KeyValueItem from '@/components/shared/key-value-item';
import { formatDate } from '@/utils/functions';
import { maskPassword } from '@/utils/functions/format';
// import PersonIcon from '@mui/icons-material/Person';
import { User } from '@/types/user-management';
import {
  // Avatar,
  Grid,
  Typography,
} from '@mui/material';
import { UseFormWatch } from 'react-hook-form';

type Summary = {
  watch: UseFormWatch<User>;
};

const Summary = ({ watch }: Summary): JSX.Element => {
  const [
    address,
    dob,
    email,
    fullName,
    password,
    role,
    status,
    preferredLanguage,
    gender,
    phoneNumber,
  ] = watch([
    'address',
    'dob',
    'email',
    'fullName',
    'password',
    'role',
    'status',
    'preferredLanguage',
    'gender',
    'phoneNumber',
  ]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Personal Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Full Name' value={fullName} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Email' value={email} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Password' value={maskPassword(password)} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Mobile Number' value={phoneNumber} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Address' value={address} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Date of birth' value={formatDate(dob)} />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography variant='body2' fontWeight={600} sx={{ textDecoration: 'underline' }}>
          Account Info
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Role' value={String(role)} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Status' value={status} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Gender' value={gender} />
      </Grid>
      <Grid item xs={6}>
        <KeyValueItem label='Preferred Language' value={preferredLanguage} />
      </Grid>
      {/* TODO: commented for now */}
      {/* <Grid item xs={6}>
          <KeyValueItem
            label='Profile picture'
            value={
              <Avatar variant='rounded'>
                <PersonIcon />
              </Avatar>
            }
          />
        </Grid> */}
    </Grid>
  );
};

export default Summary;
