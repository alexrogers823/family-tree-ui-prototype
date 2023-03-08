import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';

import Link from '../../components/common/Link';
import ContactAdminModal from '../../components/ContactAdminModal';
import { Divider, List, ListItem, ListItemText } from '@mui/material';

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: 'rgba(47, 115, 169, 0.3)'
//   },
//   question: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'left'
//   },
//   answer: {
//     fontSize: 12,
//     // color: 'green',
//   },
// }));

const FrequentlyAskedQuestions = props => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const [openContactAdmin, setOpenContactAdmin] = useState(false);

  return (
    <>
      <List>
        <h1>Frequently Asked Questions</h1>
        <ListItem>
          <ListItemText 
            primary="I noticed a piece of information is incorrect about a family member. How can I correct it?"
            secondary="Once you are logged in, you can edit most information on a family member. If there's information that you can't edit yourself, email the administrator."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="I need to delete a timeline event. How can I do this?"
            secondary="This requires admin approval. Send an email and list the reason for deletion."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="I want to add a family member on here, but their parents or children aren't yet added. How can I still add them?"
            secondary="When you add a family member, you have the option to say how they are related to someone. When you do that, their parents will be saved even if their pages haven't been created yet."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText 
            primary="My page has already been added, but I want to register an account. How will it link my account information to the correct page?"
            secondary="When registering, you can select which page is yours, and it will automatically link your information to your page. Cool huh?"
          />
        </ListItem>
        <h3>Don't see your question here?</h3>
        <h3>
        <Link onClick={() => setOpenContactAdmin(true)}>Contact the administrator</Link>
        </h3>
      </List>
      <ContactAdminModal isOpen={openContactAdmin} closeModal={() => setOpenContactAdmin(false)} />
    </>
  )
};

FrequentlyAskedQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FrequentlyAskedQuestions;