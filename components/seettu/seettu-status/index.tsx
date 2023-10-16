import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { SeettuStatus as Status } from '@/types/seettu-management';

type StatusMapping = {
  [key: string]: { label: string; color: 'success' | 'info' | 'warning' | 'default' | 'error' };
};

type Props = {
  status: Status;
};

const SeettuStatus: FC<Props> = ({ status }) => {
  const statusMapping: StatusMapping = {
    ACTIVE: { label: 'Active', color: 'success' },
    INACTIVE: { label: 'Inactive', color: 'error' },
    PENDING: { label: 'Pending', color: 'warning' },
    COMPLETED: { label: 'Completed', color: 'info' },
    default: { label: status, color: 'default' },
  };

  const { label, color } = statusMapping[status] || statusMapping.default;

  return <Chip label={label} size='small' color={color} />;
};

export default SeettuStatus;
