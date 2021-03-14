import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  artifactsUrl,
  faqUrl,
  galleryUrl,
  lineageUrl,
  timelineUrl,
  userUrl,
  memberUrl
} from '../../urls';

import AddMemberModal from '../AddMemberModal';
import Login from '../Login';
import Signup from '../Signup';

import {
  loginUser,
  logoutUser
} from '../../modules/UserSettings/redux/actions';
// TODO: Find out why when centralizing this, it breaks 

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
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [color, setColor] = useState({
    artifacts: 'inherit',
    lineage: 'inherit',
    timeline: 'inherit',
    gallery: 'inherit',
    faq: 'inherit',
    members: 'inherit'
  });

  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(state => state.usersReducer);

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
          <Link 
            className={`${classes.link}`} 
            color={color.lineage}
            href={lineageUrl}
            onClick={() => setColor({...color, lineage: 'textPrimary'})}
          >
            Tree
          </Link>
          <Link 
            className={`${classes.link}`} 
            color={color.timeline}
            href={timelineUrl}
            onClick={() => setColor({...color, timeline: 'textPrimary'})}
          >
            Timeline
          </Link>
          <Link 
            className={`${classes.link}`} 
            color={color.gallery}
            href={galleryUrl}
            onClick={() => setColor({...color, gallery: 'textPrimary'})}
          >
            Gallery
          </Link>
          <Link 
            className={`${classes.link}`} 
            color={color.artifacts}
            href={artifactsUrl}
            onClick={() => {
              setColor({...color, artifacts: 'textPrimary'})
            }}
          >
            Artifacts
          </Link>
          <Link 
            className={`${classes.link}`} 
            color={color.faq}
            href={faqUrl}
            onClick={() => setColor({...color, faq: 'textPrimary'})}
          >
            FAQ
          </Link>
          <Link
            className={`${classes.link}`}
            color={color.members}
            href={memberUrl}
            onClick={() => setColor({...color, members: 'textPrimary'})}
          >
            Members
          </Link>
          {isAuthenticated &&
            <Link 
              className={`${classes.link}`} 
              color="inherit" 
              onClick={() => setOpenMemberModal(true)} 
              href="#"
            >
              Add Member
            </Link>
          }
        </div>
        <div>
          {isAuthenticated &&
            <Link className={`${classes.link} ${classes.right}`} color="inherit" href={userUrl}>
              {user.username}
            </Link>
          }
          {
            isAuthenticated ?
              <Link className={`${classes.link} ${classes.right}`} color="inherit" onClick={() => dispatch(logoutUser())} href="#">
                Logout
              </Link>
            : <Link 
              className={`${classes.link} ${classes.right}`} 
              color="inherit" 
              onClick={() => setOpenLoginModal(true)} 
              href="#"
              >
              Login
            </Link>
          }
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
        <Login 
          isOpen={openLoginModal} 
          closeModal={() => {
            closeModal('login');
            dispatch(loginUser());
          }} 
        />
        <Signup isOpen={openSignupModal} closeModal={() => closeModal('signup')} />
      </Toolbar>
    </AppBar>
    
  );
};

export default Header;