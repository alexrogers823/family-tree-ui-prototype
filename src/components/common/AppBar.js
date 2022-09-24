import React from 'react';
import { AppBar as MuiAppBar } from '@mui/material';

const AppBar = props => {
  return (
    <MuiAppBar>
      {props.children}
    </MuiAppBar>
  )
}

export default AppBar;