import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { StyledCard } from './styles';
import LetterAvatar from '@/components/shared/avatar';

interface Props {
  connections: any[];
}

const ProfileConnections = ({ connections }: Props): JSX.Element => {
  return (
    <StyledCard>
      <CardHeader title={<Typography variant='h5'>Connections </Typography>} avatar='👥' />
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
                  <LetterAvatar fullName={connection.name} />

                  <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      {connection.name}
                    </Typography>
                    <Typography variant='caption'>{connection.connections} Seettu</Typography>
                  </Box>
                </Box>
                <Button
                  size='small'
                  color='primary'
                  sx={{ p: (theme): any => `${theme.spacing(1)} !important` }}
                >
                  💬
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
    </StyledCard>
  );
};

export default ProfileConnections;
