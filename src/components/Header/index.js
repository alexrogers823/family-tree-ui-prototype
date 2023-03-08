import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../common/AppBar';
import Link from '../common/Link';
// import { makeStyles } from '@material-ui/core/styles';

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
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

import {
  loginUser,
  logoutUser,
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
  openAddMemberModal,
  closeAddMemberModal
} from '../../redux/actions';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   link: {
//     margin: theme.spacing(2),
//     fontWeight: 600,
//   },
//   right: {
//     textShadow: '3px 3px rgba(4, 56, 18, 0.5)'
//   }
// }));

const Header = props => {
  // const classes = useStyles();
  // const [openMemberModal, setOpenMemberModal] = useState(false);
  // const [openLoginModal, setOpenLoginModal] = useState(false);
  // const [openSignupModal, setOpenSignupModal] = useState(false);
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
  const { loginModalOpen, registerModalOpen, addMemberModalOpen } = useSelector(state => state.othersReducer);

  // const closeModal = modal => {
  //   if (modal === 'member') {
  //     setOpenMemberModal(false);
  //   } else if (modal === 'login') {
  //     setOpenLoginModal(false);
  //   } else if (modal === 'signup') {
  //     setOpenSignupModal(false);
  //   }
  // }
  
  return (
    <AppBar position="static">
      <div>
        <Link  
          color={color.lineage}
          href={lineageUrl}
          underline="hover"
          onClick={() => setColor({...color, lineage: 'textPrimary'})}
        >
          Tree
        </Link>
        <Link  
          color={color.timeline}
          href={timelineUrl}
          underline="hover"
          onClick={() => setColor({...color, timeline: 'textPrimary'})}
        >
          Timeline
        </Link>
        <Link  
          color={color.gallery}
          href={galleryUrl}
          underline="hover"
          onClick={() => setColor({...color, gallery: 'textPrimary'})}
        >
          Gallery
        </Link>
        <Link  
          color={color.artifacts}
          href={artifactsUrl}
          underline="hover"
          onClick={() => {
            setColor({...color, artifacts: 'textPrimary'})
          }}
        >
          Artifacts
        </Link>
        <Link  
          color={color.faq}
          href={faqUrl}
          underline="hover"
          onClick={() => setColor({...color, faq: 'textPrimary'})}
        >
          FAQ
        </Link>
        <Link
          color={color.members}
          href={memberUrl}
          underline="hover"
          onClick={() => setColor({...color, members: 'textPrimary'})}
        >
          Members
        </Link>
        <Link  
          color="inherit" 
          href="#"
          underline="hover"
          onClick={() => dispatch(openAddMemberModal())} 
        >
          Add Member
        </Link>
      </div>
      <div>
        {isAuthenticated &&
          <>
            <Link 
              color="inherit" 
              href={userUrl}
              underline="hover"
              >
              {user.preferredName || user.firstName || 'User'}
            </Link>
            <Link 
              color="inherit" 
              href="#"
              underline="hover"
              onClick={() => dispatch(logoutUser())} 
              >
              Logout
            </Link>
          </>
        }
        {
          !isAuthenticated &&
          <>
            <Link 
              color="inherit" 
              href="#"
              underline="hover"
              onClick={() => dispatch(openLoginModal())} 
            >
              Login
            </Link>
            <Link  
              color="inherit" 
              href="#"
              underline="hover"
              onClick={() => dispatch(openRegisterModal())} 
            >
              Register
            </Link>
          </>
        }
      </div>
      <AddMemberModal 
        isOpen={addMemberModalOpen} 
        closeModal={() => {
          dispatch(closeAddMemberModal())
        }} />
      <LoginModal 
        isOpen={loginModalOpen} 
        closeModal={() => {
          dispatch(closeLoginModal());
          // dispatch(loginUser());
        }} 
      />
      <RegisterModal 
        isOpen={registerModalOpen} 
        closeModal={() => {
          dispatch(closeRegisterModal())
        }} 
      />
    </AppBar>
    
  );
};

export default Header;