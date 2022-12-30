import React from 'react';
import { 
  AppBar as MuiAppBar,
  Box,
  Toolbar
} from '@mui/material';

const AppBar = props => {
  return (
    <Box>
      <MuiAppBar position={props.position}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {props.children}
        </Toolbar>
      </MuiAppBar>
    </Box>
  )
}

export default AppBar;