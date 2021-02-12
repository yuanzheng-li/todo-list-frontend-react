import React from 'react';
import { IconButton, Snackbar } from '@material-ui/core';

export default function ErrorSnackbar({ open, handleClose, message }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
      action={
        <IconButton size="small" onClick={handleClose} color="inherit">
          X
        </IconButton>
      }
    />
  );
}
