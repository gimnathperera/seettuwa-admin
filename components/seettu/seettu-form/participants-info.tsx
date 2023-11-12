import { userStatusOptions } from '@/types/user-management';
import { Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SelectInput from '@/components/shared/select-input';
import { TabProps } from './basic-info';

const AccountInfo = ({ register, control }: TabProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item container alignItems='center' justifyContent='space-between'>
        <Grid item xs={10}>
          <SelectInput
            label='Member'
            options={userStatusOptions}
            {...register('member')}
            control={control}
          />
        </Grid>
        <Grid item>
          <Button color='primary' endIcon={<AddIcon />}>
            Invite
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccountInfo;
