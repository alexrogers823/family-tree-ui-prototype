import React from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2),
  },
}));

const Header = props => {
  const classes = useStyles();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className={classes.link} color="textPrimary" href="#">
          Tree
        </Link>
        <Link className={classes.link} color="inherit" href="#">
          Timeline
        </Link>
        <Link className={classes.link} color="inherit" href="#">
          Gallery
        </Link>
        <Link className={classes.link} color="inherit" href="#">
          FAQ
        </Link>
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;