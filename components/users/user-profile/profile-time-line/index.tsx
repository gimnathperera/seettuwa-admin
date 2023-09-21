// ** MUI Imports
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline';
import TimelineIcon from '@mui/icons-material/Timeline';
import { StyledCard } from './styles';

const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none',
    },
  },
});

const ProfileTimeLine = (): JSX.Element => {
  return (
    <StyledCard>
      <CardHeader
        title={<Typography variant='h6'>Activity Timeline</Typography>}
        sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
        avatar={<TimelineIcon />}
        titleTypographyProps={{ sx: { color: 'text.primary' } }}
      />
      <CardContent>
        <Timeline sx={{ my: 0, py: 0 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='error' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2.75)} !important` }}>
              <Box
                sx={{
                  mb: 2.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>8 Invoices have been paid</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  Wednesday
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                Invoices have been paid to the company.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  width={24}
                  height={24}
                  alt='invoice.pdf'
                  src='https://i.ibb.co/M6jBhrz/1.png'
                />
                <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }}>
                  invoice.pdf
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2.75)} !important` }}>
              <Box
                sx={{
                  mb: 2.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>
                  Create a new project for client 😎
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  April, 18
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2.5 }}>
                Invoices have been paid to the company.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  src='https://i.ibb.co/M6jBhrz/1.png'
                  sx={{ mr: 2.5, width: 24, height: 24 }}
                />
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  John Doe (Client)
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0, mb: theme => `${theme.spacing(2.75)} !important` }}>
              <Box
                sx={{
                  mb: 2.5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Order #37745 from September</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  January, 10
                </Typography>
              </Box>
              <Typography variant='body2'>Invoices have been paid to the company.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='warning' />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Public Meeting</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  September, 30
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </StyledCard>
  );
};

export default ProfileTimeLine;
