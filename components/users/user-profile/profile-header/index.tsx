import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { HeaderWrapper, ProfilePicture } from './styles';
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UserProfileHeader = (): JSX.Element => {
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
              John Doe
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
                <BusinessCenterIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  Owner
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
                <LocationOnIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  Vatican City
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
                  Joined April 2021
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' startIcon={<EditIcon />}>
            Update User
          </Button>
        </Box>
      </CardContent>
    </HeaderWrapper>
  );
};

export default UserProfileHeader;
