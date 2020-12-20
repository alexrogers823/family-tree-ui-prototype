import React, { useState } from 'react';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  faqUrl,
  galleryUrl,
  lineageUrl,
  timelineUrl
} from '../../urls';

import AddMemberModal from '../AddMemberModal';
import Login from '../Login';
import Signup from '../Signup';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(2),
    fontWeight: 600,
  },
  right: {
    textShadow: '3px 3px rgba(4, 56, 18, 0.5)'
  }
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
      <Toolbar className={classes.root}>
        <div>
          <Link className={`${classes.link}`} color="textPrimary" href={lineageUrl}>
            Tree
          </Link>
          <Link className={`${classes.link}`} color="inherit" href={timelineUrl}>
            Timeline
          </Link>
          <Link className={`${classes.link}`} color="inherit" href={galleryUrl}>
            Gallery
          </Link>
          <Link className={`${classes.link}`} color="inherit" href={faqUrl}>
            FAQ
          </Link>
          <Link 
            className={`${classes.link}`} 
            color="inherit" 
            onClick={() => setOpenMemberModal(true)} 
            href="#"
            >
            Add Member
          </Link>
        </div>
        <div>
          <Link 
            className={`${classes.link} ${classes.right}`} 
            color="inherit" 
            onClick={() => setOpenLoginModal(true)} 
            href="#"
            >
            Login
          </Link>
          <Link 
            className={`${classes.link} ${classes.right}`} 
            color="inherit" 
            onClick={() => setOpenSignupModal(true)} 
            href="#"
            >
            Register
          </Link>
        </div>
        <AddMemberModal isOpen={openMemberModal} closeModal={() => closeModal('member')} />
        <Login isOpen={openLoginModal} closeModal={() => closeModal('login')} />
        <Signup isOpen={openSignupModal} closeModal={() => closeModal('signup')} />
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;