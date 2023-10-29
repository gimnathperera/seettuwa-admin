import React, { FC } from 'react';
import { Box, Chip } from '@mui/material';
import { RoleName } from '@/types/user-management';
import { toTitleCase } from '@/utils/functions';

type RoleMapping = {
  [key: string]: { label: string };
};

type RoleChipProps = {
  roleName: RoleName;
};

type Props = {
  role?: RoleName;
};

const RoleChip: FC<RoleChipProps> = ({ roleName }) => {
  const roleMapping: RoleMapping = {
    OWNER: { label: 'OWNER' },
    VISITOR: { label: 'VISITOR' },
    ADMIN: { label: 'ADMIN' },
    default: { label: roleName },
  };

  const { label } = roleMapping[roleName] || roleMapping.default;

  return <Chip label={toTitleCase(label)} size='small' variant='outlined' />;
};

const RoleList: FC<Props> = ({ role }) => {
  return <Box>{role ? <RoleChip roleName={role} /> : '-'}</Box>;
};

export default RoleList;
