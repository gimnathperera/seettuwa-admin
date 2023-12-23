import { uniqueId } from 'lodash-es';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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

  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: LoginIcon,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: LockOpenIcon,
    href: '/authentication/register',
  },
];

export default Menuitems;
