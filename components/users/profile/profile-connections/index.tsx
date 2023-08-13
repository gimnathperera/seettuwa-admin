import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

interface Props {
  connections: any[];
}

const ProfileConnections = ({ connections }: Props): JSX.Element => {
  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Connections' action={<MoreVertIcon />} />
          <CardContent>
            {connections &&
              connections.map((connection: any, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      '&:not(:last-of-type)': { mb: 2 },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={connection.avatar} sx={{ mr: 1, width: 38, height: 38 }} />
                      <div>
                        <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
                          {connection.name}
                        </Typography>
                        <Typography variant='caption'>
                          {connection.connections} Connections
                        </Typography>
                      </div>
                    </Box>
                    <Button
                      size='small'
                      color='primary'
                      variant={connection.isFriend ? 'contained' : 'outlined'}
                      sx={{ minWidth: 38, p: (theme): any => `${theme.spacing(1.5)} !important` }}
                    >
                      <Person4OutlinedIcon />
                    </Button>
                  </Box>
                );
              })}
            <Box sx={{ mt: 3.5, width: '100%', textAlign: 'center' }}>
              <Typography
                href='/'
                component={Link}
                onClick={(e): void => e.preventDefault()}
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                View all connections
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default ProfileConnections;
