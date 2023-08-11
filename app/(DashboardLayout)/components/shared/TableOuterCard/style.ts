import styled from '@emotion/styled';
import { Card, CardContent, CardHeader } from '@mui/material';

export const StyledCard = styled(Card)(() => ({
  borderRadius: '20px',
}));

export const StyledCardHeader = styled(CardHeader)(() => ({
  padding: '30px',
}));

export const StyledCardContent = styled(CardContent)(() => ({
  padding: '24px !important',
}));
