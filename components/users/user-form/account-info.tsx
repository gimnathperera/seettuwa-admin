import {
  preferredLanguageOptions,
  userGenderOptions,
  userRoleOptions,
  userStatusOptions,
} from '@/types/user-management';
import { Grid } from '@mui/material';

import SelectInput from '@/components/shared/select-input';
import { TabProps } from './personal-info';

const AccountInfo = ({ register, control }: TabProps): JSX.Element => {
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
      {/* TODO: commented for now */}
      {/* <Grid item xs={12}>
          <FileInput />
        </Grid> */}
    </Grid>
  );
};

export default AccountInfo;
