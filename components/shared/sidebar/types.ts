import { IconProps } from '@/icons/UserIcon';

export type MenuItemType = {
  label: string;
  Icon: ({ className }: IconProps) => JSX.Element;
  path: string;
  isActive: boolean;
};
