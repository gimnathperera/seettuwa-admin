import { Ref, forwardRef, ReactElement, useRef, useMemo, ReactNode } from 'react';
import { Box, Breakpoint, Button, Dialog } from '@mui/material';
import Fade, { FadeProps } from '@mui/material/Fade';

import { ModalContent, CloseButton, ModalHeader, ModalActions } from './styles';

import SectionHeader from '../section-header';
import { AsyncButton } from '@/components';

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

interface Props {
  title: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  submitButtonLabel?: string;
  children: ReactNode;
  maxWidth?: Breakpoint;
  isLoading?: boolean;
  height?: string | number;
}

const destructiveActions = ['delete', 'assign', 'confirm'];

const Modal = ({
  title,
  isOpen,
  onClose,
  onSubmit,
  submitButtonLabel,
  children,
  maxWidth = 'xs',
  height,
  isLoading,
}: Props): JSX.Element => {
  const childrenContainerRef = useRef<HTMLDivElement>(null);

  const isDestructive = useMemo(
    () => destructiveActions.includes(String(submitButtonLabel)?.toLowerCase()),
    [submitButtonLabel],
  );

  const handleOnClose = onClose;
  const handleOnClickClose = onClose;

  const handleOnSubmit = (): void => {
    if (!childrenContainerRef.current) return;

    const form = childrenContainerRef.current.querySelector('form');
    form?.requestSubmit();
    onSubmit?.();
  };

  return (
    <Dialog
      fullWidth
      open={isOpen}
      maxWidth={maxWidth}
      scroll='body'
      onClose={handleOnClose}
      TransitionComponent={Transition}
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem' } }}
    >
      <ModalContent>
        <CloseButton color='error' size='small' icon='❌' onClick={handleOnClickClose} />

        <ModalHeader>
          {typeof title === 'string' ? <SectionHeader title={title} /> : <>{title}</>}
        </ModalHeader>

        <Box ref={childrenContainerRef} sx={{ height: height || 'auto' }}>
          {children}
        </Box>
      </ModalContent>

      {(submitButtonLabel || isDestructive) && (
        <ModalActions>
          {submitButtonLabel && (
            <AsyncButton
              text={submitButtonLabel}
              isLoading={isLoading}
              disabled={isLoading}
              onClick={handleOnSubmit}
            />
          )}

          <Button size='small' variant='outlined' color='primary' onClick={handleOnClose}>
            Cancel
          </Button>
        </ModalActions>
      )}
    </Dialog>
  );
};

export default Modal;
