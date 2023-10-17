import { IconButton as Button, ButtonProps, Tooltip } from '@mui/material';

interface Props extends ButtonProps {
  icon: string;
  tooltip?: string;
  onClick: () => void;
}

const IconButton = ({ icon, tooltip, onClick, ...rest }: Props): JSX.Element => {
  return (
    <Tooltip title={tooltip}>
      <Button size='small' color='warning' onClick={onClick} {...rest}>
        {icon}
      </Button>
    </Tooltip>
  );
};

export default IconButton;
