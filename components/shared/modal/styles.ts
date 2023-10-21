import { styled } from '@mui/material/styles';
import { DialogContent, Box, DialogActions } from '@mui/material';
import IconButton from '../buttons/icon-button';

export const ModalContent = styled(DialogContent)(() => ({
  position: 'relative',
}));

export const ModalHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: 'left',
}));

export const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  padding: 0,
}));

export const ModalActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
  gap: 8,
}));
