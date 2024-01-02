import GroupIcon from '@mui/icons-material/Group';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { uniqueId } from 'lodash-es';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Overview',
    icon: TrendingUpIcon,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },

  {
    id: uniqueId(),
    title: 'Users',
    icon: GroupIcon,
    href: '/user-management/users',
  },

  {
    navlabel: true,
    subheader: 'Seettu Management',
  },

  {
    id: uniqueId(),
    title: 'Seettu',
    icon: LocalAtmIcon,
    href: '/seettu-management/seettu',
  },
];

export default Menuitems;
