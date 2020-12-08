import React, { useState } from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddMemberModal from '../AddMemberModal';
import Login from '../Login';
import Signup from '../Signup';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(2),
  },
}));

const Header = props => {
  const classes = useStyles();
  const [openMemberModal, setOpenMemberModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const closeModal = modal => {
    if (modal === 'member') {
      setOpenMemberModal(false);
    } else if (modal === 'login') {
      setOpenLoginModal(false);
    } else if (modal === 'signup') {
      setOpenSignupModal(false);
    }
  }
  
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
        <Link 
          className={classes.link} 
          color="inherit" 
          onClick={() => setOpenMemberModal(true)} 
          href="#"
        >
          Add Member
        </Link>
        <Link 
          className={classes.link} 
          color="inherit" 
          onClick={() => setOpenLoginModal(true)} 
          href="#"
        >
          Login
        </Link>
        <Link 
          className={classes.link} 
          color="inherit" 
          onClick={() => setOpenSignupModal(true)} 
          href="#"
        >
          Register
        </Link>
        <AddMemberModal isOpen={openMemberModal} closeModal={() => closeModal('member')} />
        <Login isOpen={openLoginModal} closeModal={() => closeModal('login')} />
        <Signup isOpen={openSignupModal} closeModal={() => closeModal('signup')} />
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;