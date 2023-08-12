import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const FooterStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(2),
}));
