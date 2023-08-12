import Typography from '@mui/material/Typography';
import { FooterStyled } from './styles';

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <Typography sx={{ mr: 2 }}>Copyright © සීට්ටුව Online</Typography>
    </FooterStyled>
  );
};

export default Footer;
