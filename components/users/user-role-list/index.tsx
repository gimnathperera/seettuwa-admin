import React, { FC } from 'react';
import { Box, Chip } from '@mui/material';
import { Role, RoleName } from '@/types/user-management';
import { toTitleCase } from '@/utils/functions';

type RoleMapping = {
  [key: string]: { label: string; color: 'success' | 'info' | 'warning' | 'default' };
};

type RoleChipProps = {
  roleName: RoleName;
};

type Props = {
  roles?: Role[];
};

const RoleChip: FC<RoleChipProps> = ({ roleName }) => {
  const roleMapping: RoleMapping = {
    OWNER: { label: 'OWNER', color: 'success' },
    VISITOR: { label: 'VISITOR', color: 'info' },
    ADMIN: { label: 'ADMIN', color: 'warning' },
    default: { label: roleName, color: 'default' },
  };

  const { label, color } = roleMapping[roleName] || roleMapping.default;

  return <Chip label={toTitleCase(label)} size='small' color={color} />;
};

const RoleList: FC<Props> = ({ roles }) => {
  return (
    <Box>
      {roles?.length ? roles?.map(({ id, name }) => <RoleChip key={id} roleName={name} />) : '-'}
    </Box>
  );
};

export default RoleList;
