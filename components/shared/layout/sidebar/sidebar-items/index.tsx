import React from 'react';
import { usePathname } from 'next/navigation';
import { Box, List } from '@mui/material';
import Menuitems from '../menu-items';
import NavItem from '../nav-item';
import NavGroup from '../nav-group';

const SidebarItems = ({ toggleMobileSidebar }: any): JSX.Element => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className='sidebarNav' component='div'>
        {Menuitems.map(item => {
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
