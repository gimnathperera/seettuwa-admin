'use client';

import Grid from '@mui/material/Grid';
import { UserProfileHeader } from '@/components';

const UserProfile = (): JSX.Element => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UserProfileHeader />
      </Grid>
    </Grid>
  );
};

export default UserProfile;
