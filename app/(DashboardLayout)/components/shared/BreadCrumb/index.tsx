import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { ChevronRight } from '@mui/icons-material';

const Breadcrumb = (): JSX.Element => {
  return (
    <Breadcrumbs separator={<ChevronRight />}>
      <Link
        underline='hover'
        sx={{ display: 'flex', alignItems: 'center' }}
        color='inherit'
        href='/'
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
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
    </Breadcrumbs>
  );
};

export default Breadcrumb;
