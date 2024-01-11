import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import PeopleIcon from '@mui/icons-material/People';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { HeaderWrapper, ProfilePicture } from './styles';

const SeettuProfileHeader = (): JSX.Element => {
  return (
    <HeaderWrapper>
      <CardMedia
        component='img'
        alt='profile-header'
        image={'https://i.ibb.co/j4JDTz3/profile-banner.png'}
        sx={{
          height: { xs: 150, md: 250 },
        }}
      />
      <CardContent
        sx={{
          pt: 3,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <ProfilePicture src={'https://i.ibb.co/M6jBhrz/1.png'} alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 4 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between'],
          }}
        >
          <Box
            sx={{
              mb: [6, 0],
              display: 'flex',
              flexDirection: 'column',
              alignItems: ['center', 'flex-start'],
            }}
          >
            <Typography variant='h5' sx={{ mb: 2 }}>
              Pillow Mart 2024
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start'],
              }}
            >
              <Box
                sx={{
                  mr: 5,
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' },
                }}
              >
                <HourglassTopIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  8 Months
                </Typography>
              </Box>
              <Box
                sx={{
                  mr: 5,
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' },
                }}
              >
                <PeopleIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  24 Members
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  '& svg': { mr: 1, color: 'text.secondary' },
                }}
              >
                <CalendarMonthIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  Started 17 April 2021
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' startIcon={<EditIcon />}>
            Update Seettu
          </Button>
        </Box>
      </CardContent>
    </HeaderWrapper>
  );
};

export default SeettuProfileHeader;
