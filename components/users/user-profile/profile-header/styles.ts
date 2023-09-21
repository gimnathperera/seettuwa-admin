import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const HeaderWrapper = styled(Card)(() => ({
  boxShadow: 'none',
  borderRadius: '20px',
}));

// TODO: update type "any"
export const ProfilePicture = styled('img')(({ theme }: any) => ({
  width: 120,
  height: 120,
  borderRadius: '20px',
  border: `5px solid ${theme.palette.common.white}`,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));
