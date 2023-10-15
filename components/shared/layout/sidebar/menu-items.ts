import { uniqueId } from 'lodash-es';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Overview',
    icon: '📊',
    href: '/',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },

  {
    id: uniqueId(),
    title: 'Users',
    icon: '👥',
    href: '/user-management/users',
  },

  {
    navlabel: true,
    subheader: 'Seettu Management',
  },

  {
    id: uniqueId(),
    title: 'Seettu',
    icon: '💸',
    href: '/seettu-management/seettu',
  },

  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: '🗝',
    href: '/authentication/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: '🔓',
    href: '/authentication/register',
  },
];

export default Menuitems;
