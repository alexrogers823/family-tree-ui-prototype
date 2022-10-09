import React from 'react';
import { 
  AppBar as MuiAppBar,
  Box,
  Toolbar
} from '@mui/material';

const AppBar = props => {
  return (
    <MuiAppBar>
      <Box>
        <Toolbar>
          {props.children}
        </Toolbar>
      </Box>
    </MuiAppBar>
  )
}

export default AppBar;