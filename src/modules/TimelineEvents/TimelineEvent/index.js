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

  // console.log('timeline index: ', props.isMostRecent)

  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent>
          {props.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot onClick={() => setOpenModal(true)} />
          {!props.isMostRecent && 
            <TimelineConnector />
          }
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