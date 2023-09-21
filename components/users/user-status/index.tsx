import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { UserStatus as Status } from '@/types/user-management';

type StatusMapping = {
  [key: string]: { label: string; color: 'success' | 'info' | 'warning' | 'default' | 'error' };
};

type UserStatusProps = {
  status: Status;
};

const UserStatus: FC<UserStatusProps> = ({ status }) => {
  const statusMapping: StatusMapping = {
    ACTIVE: { label: 'Active', color: 'success' },
    INACTIVE: { label: 'Inactive', color: 'warning' },
    PENDING: { label: 'Pending', color: 'info' },
    SUSPENDED: { label: 'Suspended', color: 'error' },
    default: { label: status, color: 'default' },
  };

  const { label, color } = statusMapping[status] || statusMapping.default;

  return <Chip label={label} size='small' color={color} />;
};

export default UserStatus;
