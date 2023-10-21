import { FC } from 'react';
import { Grid } from '@mui/material';
import { StyledTypography } from './styles';

interface Props {
  title: string;
  fontSize?: number;
}

const SectionHeader: FC<Props> = ({ title, fontSize = 18 }) => (
  <Grid item xs={12}>
    <StyledTypography fontSize={fontSize}>{title}</StyledTypography>
  </Grid>
);

export default SectionHeader;
