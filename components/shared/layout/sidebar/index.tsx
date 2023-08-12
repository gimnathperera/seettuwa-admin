import { useMediaQuery, Box, Drawer } from '@mui/material';
import Logo from '../logo';
import SidebarItems from './sidebar-items';

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: ItemType): JSX.Element => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor='left'
          open={isSidebarOpen}
          variant='permanent'
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Box px={3}>
              <Logo />
            </Box>
            <Box>
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor='left'
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant='temporary'
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: theme => theme.shadows[8],
        },
      }}
    >
      <Box px={2}>
        <Logo />
      </Box>

      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
