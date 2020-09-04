import React from 'react';
import {
  Button,
  Dialog as MDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

type Props = {
  open: boolean;
  onToggle: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
};

const Dialog: React.FC<Props> = ({
  open,
  onToggle,
  onConfirm,
  title,
  description,
}) => {
  return (
    <MDialog
      open={open}
      onClose={onToggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onToggle} color="primary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </MDialog>
  );
};

export default Dialog;
