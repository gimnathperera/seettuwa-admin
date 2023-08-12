import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: DashboardOutlinedIcon,
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },

  {
    id: uniqueId(),
    title: 'Users',
    icon: PeopleAltOutlinedIcon,
    href: '/user-management/users',
  },

  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: LoginOutlinedIcon,
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: PersonAddAltOutlinedIcon,
    href: '/authentication/register',
  },
];

export default Menuitems;
