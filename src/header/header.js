import React, { useState } from 'react';
import ConfirmationDialog from '../confirmation-dialog/ConfirmationDialog';

import './Header.css';

export default function Header({ handleDeleteAll }) {
  const [open, setOpen] = useState(false);

  const handleClose = (confirmed) => {
    setOpen(false);
    if(confirmed) {
      handleDeleteAll();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <header>
      <h1>Marvelous v2.0</h1>
      <a href="#" onClick={handleClick}>Delete all tasks</a>
      <ConfirmationDialog title='Delete All Tasks?' content='Please confirm to delete all tasks!' handleClose={ handleClose } open={open} />
    </header>
  );
}
