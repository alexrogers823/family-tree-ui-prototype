import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import EditTimelineEventModal from '../../../components/EditTimelineEventModal';

const TimelineEvent = props => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          {props.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot onClick={() => setOpenModal(true)} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{props.event}</TimelineContent>
      </TimelineItem>
      <EditTimelineEventModal isOpen={openModal} closeModal={() => setOpenModal(false)} {...props} />
    </>
  );
};

TimelineEvent.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default TimelineEvent;