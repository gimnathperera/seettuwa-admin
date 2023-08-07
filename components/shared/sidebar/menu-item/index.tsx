import clsx from 'clsx';
import { MenuItemType } from '../types';

const MenuItem = ({ label, path, Icon, isActive }: MenuItemType): JSX.Element => {
  const linkClass = clsx(
    'flex items-center p-2 rounded-lg group',
    {
      'bg-[#5D87FF] dark:bg-gray-700 text-white dark:hover:bg-gray-700': isActive,
      'text-[#5A6A85] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700': !isActive,
    },
    'transition-colors ease-in-out duration-300',
  );

  const iconClass = clsx(
    'flex-shrink-0 w-5 h-5',
    {
      'text-white dark:text-gray-400': isActive,
      'text-[#5A6A85] group-hover:text-gray-900': !isActive,
    },
    'transition-colors ease-in-out duration-300',
  );

  return (
    <li>
      <a href={path} className={linkClass}>
        <Icon className={iconClass} />
        <span className='flex-1 ml-3 whitespace-nowrap'>{label}</span>
      </a>
    </li>
  );
};

export default MenuItem;
