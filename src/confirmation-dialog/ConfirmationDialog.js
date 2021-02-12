import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';

export default function ConfirmationDialog({ open, handleClose, title, content }) {
  const handleCancel = () => {
    handleClose(false);
  };

  const handleConfirm = () => {
    handleClose(true);
  };

  return (
    <Dialog maxWidth='xs' open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} color='secondary'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
