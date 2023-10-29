import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { FC, MouseEvent, useState } from 'react';
import { StyledMenu } from './styles';
import { IconButton } from '@/components';
import DeleteIcon from '@mui/icons-material/Delete';

const TableAction: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event?: MouseEvent<HTMLButtonElement>): void => {
    event && setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton icon='🔻' onClick={handleClick} />
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Copy ID
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
          <RemoveRedEyeIcon />
          View
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default TableAction;
