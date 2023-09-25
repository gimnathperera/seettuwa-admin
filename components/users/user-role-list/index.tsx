import React, { FC } from 'react';
import { Box, Chip } from '@mui/material';
import { Role, RoleName } from '@/types/user-management';
import { toTitleCase } from '@/utils/functions';

type RoleMapping = {
  [key: string]: { label: string };
};

type RoleChipProps = {
  roleName: RoleName;
};

type Props = {
  roles?: Role[];
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

const RoleList: FC<Props> = ({ roles }) => {
  return (
    <Box>
      {roles?.length ? roles?.map(({ id, name }) => <RoleChip key={id} roleName={name} />) : '-'}
    </Box>
  );
};

export default RoleList;
