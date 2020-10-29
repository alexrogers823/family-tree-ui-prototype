import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 12,
    color: 'green',
  },
}));

const FrequentlyAskedQuestions = props => {
  const classes = useStyles();

  const ListOfQuestions = () => {
    return props.questions.map((q, i) => {
      return (
        <Accordion key={`Question ${i}`}>
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
    <div>
      <h1>Frequently Asked Questions</h1>
      {ListOfQuestions()}
    </div>
  );
};

FrequentlyAskedQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FrequentlyAskedQuestions;