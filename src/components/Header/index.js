import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link color="textPrimary" href="#">
          Tree
        </Link>
        <Link color="inherit" href="#">
          Timeline
        </Link>
        <Link color="inherit" href="#">
          Gallery
        </Link>
        <Link color="inherit" href="#">
          FAQ
        </Link>
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;