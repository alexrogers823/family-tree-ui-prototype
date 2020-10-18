import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Timeline = props => {
  return (
    // <div>
    //   <p>{props.year}</p>
    //   <p>{props.timelineEvent}</p>
    // </div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="timeline-content"
        id="timeline-header"
        >
        <Typography>{props.year}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.timelineEvent}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

Timeline.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default Timeline;