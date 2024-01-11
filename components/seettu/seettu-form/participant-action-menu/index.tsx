import { IconButton } from '@/components';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SecurityIcon from '@mui/icons-material/Security';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import { FC, MouseEvent, useState } from 'react';
import { StyledMenu } from './styles';

type Props = {
  handleOnDelete?: () => void;
};

const ParticipantAction: FC<Props> = ({ handleOnDelete }) => {
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
      <IconButton color='secondary' icon={<MoreVertIcon />} onClick={handleClick} />
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <SecurityIcon />
          Make as owner
        </MenuItem>

        <MenuItem onClick={handleOnDelete} disableRipple>
          <SendIcon />
          Send Message
        </MenuItem>

        <MenuItem onClick={handleOnDelete} disableRipple>
          <DeleteIcon />
          Remove
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default ParticipantAction;
