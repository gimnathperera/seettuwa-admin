import SeettuwaIcon from '@/icons/SeettuwaIcon';
import UserIcon from '@/icons/UserIcon';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Seettuwa-Admin',
  description: 'Make beautiful websites regardless of your design experience.',
  navMenuItems: [
    {
      label: 'User Management',
      Icon: UserIcon,
      path: '/users',
      isActive: true,
    },
    {
      label: 'Seettu Management',
      Icon: SeettuwaIcon,
      path: '/seettu',
      isActive: false,
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui-docs-v2.vercel.app',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
