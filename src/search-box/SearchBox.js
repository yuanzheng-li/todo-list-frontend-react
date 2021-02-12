import React from 'react';
import { TextField } from '@material-ui/core';

export default function SearchBox() {
  return <TextField id='search' label='Search' type='search' variant='outlined' size='small' className="search-box" />;
}
