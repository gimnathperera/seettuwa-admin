import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledCard } from './styles';

interface Props {
  about: any[];
  contacts: any[];
  timeline: any[];
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
          }}
        >
          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 600 }} variant='body2'>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</Typography>
          </Box>
        </Box>
      );
    });
  } else {
    return null;
  }
};

const SeettuOverview = ({ about, timeline, contacts }: Props): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledCard>
          <CardHeader
            title={<Typography variant='h6'>About Seettuwa</Typography>}
            sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
            avatar='💰'
            titleTypographyProps={{ sx: { color: 'text.primary' } }}
          />
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                Basic Info
              </Typography>
              {renderList(about)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                Timeline Info
              </Typography>
              {renderList(timeline)}
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant='body1' sx={{ mb: 2, display: 'block', fontWeight: 'bold' }}>
                Participants Info
              </Typography>
              {renderList(contacts)}
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
};

export default SeettuOverview;
