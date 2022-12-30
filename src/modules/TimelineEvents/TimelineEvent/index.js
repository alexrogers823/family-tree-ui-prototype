import React from 'react';
import PropTypes from 'prop-types';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimelineEvent = props => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        {props.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{props.event}</TimelineContent>
    </TimelineItem>
  );
};

TimelineEvent.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default TimelineEvent;