import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { ChevronRight } from '@mui/icons-material';
import { StyledBreadcrumb } from './styles';

const Breadcrumb = (): JSX.Element => {
  return (
    <StyledBreadcrumb separator={<ChevronRight />}>
      <Link
        underline='hover'
        sx={{ display: 'flex', alignItems: 'center' }}
        color='inherit'
        href='/'
      >
        MUI
      </Link>
      <Link
        underline='hover'
        sx={{ display: 'flex', alignItems: 'center' }}
        color='inherit'
        href='/material-ui/getting-started/installation/'
      >
        Core
      </Link>
      <Typography sx={{ display: 'flex', alignItems: 'center' }} color='text.primary'>
        Breadcrumb
      </Typography>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
