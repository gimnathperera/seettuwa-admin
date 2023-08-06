import React from 'react';

export type IconProps = {
  className?: string;
};

const SeettuwaIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      className={
        className ||
        'flex-shrink-0 w-5 h-5 text-[#5A6A85] transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white'
      }
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91z'
      ></path>
    </svg>
  );
};

export default SeettuwaIcon;
