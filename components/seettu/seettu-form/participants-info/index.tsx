import SelectInput from '@/components/shared/select-input';
import { userStatusOptions } from '@/types/user-management';
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Button, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { TabProps } from '../basic-info';
import ParticipantAction from '../participant-action-menu';

const MemberList: FC = () => {
  return (
    <List>
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-secondary-label-${value}`;

        return (
          <ListItem key={value} secondaryAction={<ParticipantAction />} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src='/images/profile/user-1.jpg'
                  variant='rounded'
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Participant ${value + 1}`} />
              {value === 0 && <AdminPanelSettingsIcon />}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const ParticipantsInfo = ({ register, control }: TabProps): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item container alignItems='center' justifyContent='space-between'>
        <Grid item xs={10}>
          <SelectInput
            label='Member Name'
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
      <Grid item xs={12}>
        <MemberList />
      </Grid>
    </Grid>
  );
};

export default ParticipantsInfo;
