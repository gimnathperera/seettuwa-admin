import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadius,
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const UserProfileHeader = (): JSX.Element => {
  return (
    <Card>
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
                <VerifiedUserOutlinedIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  UX Designer
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
                <PlaceOutlinedIcon />
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
                <CalendarTodayOutlinedIcon />
                <Typography sx={{ ml: 1, color: 'text.secondary', fontWeight: 600 }}>
                  Joined April 2021
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button variant='contained' startIcon={<EditOutlinedIcon />}>
            Edit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfileHeader;
