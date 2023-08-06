import React from 'react';

export type IconProps = {
  className?: string;
};

const UserIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      className={
        className ||
        'flex-shrink-0 w-5 h-5 text-[#5A6A85] transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white'
      }
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 20 18'
    >
      <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
    </svg>
  );
};

export default UserIcon;
