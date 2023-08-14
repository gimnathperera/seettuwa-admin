import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { StyledCard } from './styles';

interface Props {
  teams: any[];
  about: any[];
  contacts: any[];
  overview: any[];
}

const renderList = (arr: any[]): any => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 2 },
            '& svg': { color: 'text.secondary' },
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>{/* <Icon icon={item.icon} /> */}</Box>

          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
            </Typography>
          </Box>
        </Box>
      );
    });
  } else {
    return null;
  }
};

const renderTeams = (arr: any[]): any => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:not(:last-of-type)': { mb: 2 },
            '& svg': { color: `${item.color}.main` },
          }}
        >
          {/* <Icon icon='item.icon' /> */}

          <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>
            {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </Box>
      );
    });
  } else {
    return null;
  }
};

const ProfileOverview = (props: Props): JSX.Element => {
  const { teams, about, contacts } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledCard>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant='caption'
                sx={{ mb: 2, display: 'block', textTransform: 'uppercase' }}
              >
                About
              </Typography>
              {renderList(about)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant='caption'
                sx={{ mb: 2, display: 'block', textTransform: 'uppercase' }}
              >
                Contacts
              </Typography>
              {renderList(contacts)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant='caption'
                sx={{ mb: 2, display: 'block', textTransform: 'uppercase' }}
              >
                Teams
              </Typography>
              {renderTeams(teams)}
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default ProfileOverview;
