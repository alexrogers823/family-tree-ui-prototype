import React, { useState } from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddMemberModal from '../AddMemberModal';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2),
  },
}));

const Header = props => {
  const [openMemberModal, setOpenMemberModal] = useState(false);
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
        <Link className={classes.link} color="inherit" href="#">
          Add Member
        </Link>
        <AddMemberModal />
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;