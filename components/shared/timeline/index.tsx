import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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

const TimeLine = (): JSX.Element => {
  return (
    <StyledCard>
      <CardHeader
        title={<Typography variant='h6'>Activity Timeline</Typography>}
        sx={{ '& .MuiCardHeader-avatar': { mr: 2.5 } }}
        avatar='📈'
        titleTypographyProps={{ sx: { color: 'text.primary' } }}
      />
      <CardContent>
        <Timeline sx={{ my: 0, py: 0 }}>
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Completed seettu #37745</Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  April, 18
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2.5 }}>
                Invoices have been paid to the company.
              </Typography>
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>
                  Seettu #37745 from September
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  January, 10
                </Typography>
              </Box>
              <Typography variant='body2'>Created a new seettu</Typography>
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
                <Typography sx={{ mr: 2, fontWeight: 600 }}>Registered</Typography>
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

export default TimeLine;
