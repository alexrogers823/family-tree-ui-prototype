import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  decade: {
    fontWeight: 600,
    fontStyle: 'italic',
    color: 'blue'
  },
}));

const Timeline = props => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="timeline-content"
        id="timeline-header"
        >
        <Typography className={classes.decade}>{props.year}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>- {props.timelineEvent}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

Timeline.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default Timeline;