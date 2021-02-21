import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../components/common/Link';
import ContactAdminModal from '../../components/ContactAdminModal';

import { getAllQuestions, postNewQuestion } from './redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(47, 115, 169, 0.3)'
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  answer: {
    fontSize: 12,
    // color: 'green',
  },
}));

const FrequentlyAskedQuestions = props => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const [openContactAdmin, setOpenContactAdmin] = useState(false);

  useEffect(() => {
    props.getAllQuestions();
  }, [])

  // const questions = useSelector(state => state.questions);
  // const dispatch = useDispatch()

  const ListOfQuestions = () => {
    return props.questions.map((q, i) => {
      return (
        <Accordion key={`Question ${i}`} className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-content"
            id="faq-question"
          >
            <Typography className={classes.question}>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      )
    })
  };

  return (
    <div className={classes.root}>
      <h1>Frequently Asked Questions</h1>
      {ListOfQuestions()}
      <h3>Don't see your question here?</h3>
      <h3>
        <Link
          onClick={() => setOpenContactAdmin(true)}
        >
          Contact the administrator
        </Link>
      </h3>
      <button onClick={props.postNewQuestion}>Test dispatch</button>
      <ContactAdminModal isOpen={openContactAdmin} closeModal={() => setOpenContactAdmin(false)} />
    </div>
  );
};

FrequentlyAskedQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => {
  return {
    ...state.faqReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestions: () => dispatch(getAllQuestions()),
    postNewQuestion: () => dispatch(postNewQuestion())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FrequentlyAskedQuestions);