import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge } from '@mui/material';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import UserMenu from './user-menu';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType): JSX.Element => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position='sticky' color='default'>
      <ToolbarStyled>
        <IconButton
          color='inherit'
          aria-label='menu'
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <ListOutlinedIcon width='20' height='20' />
        </IconButton>

        <Box flexGrow={1} />
        <Stack spacing={1} direction='row' alignItems='center'>
          <IconButton
            size='small'
            aria-label='show 11 new notifications'
            color='inherit'
            aria-controls='msgs-menu'
            aria-haspopup='true'
          >
            <Badge variant='dot' color='primary'>
              🔔
            </Badge>
          </IconButton>

          <UserMenu />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
