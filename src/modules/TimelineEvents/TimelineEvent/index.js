import StarsIcon from '@mui/icons-material/Stars';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot, TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '../../../components/common/Typography';
import EditTimelineEventModal from '../../../components/EditTimelineEventModal';

const TimelineEvent = props => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TimelineItem>
        {props.decade &&
          <TimelineOppositeContent>
            <Typography variant="h6">
              {props.decade}
            </Typography>
          </TimelineOppositeContent>
        }
        <TimelineSeparator>
          <TimelineDot onClick={() => setOpenModal(true)}>
            {props.decade && <StarsIcon />}
          </TimelineDot>
          {!props.isMostRecent && 
            <TimelineConnector />
          }
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle1" component="span">
            {props.date}
          </Typography>
          <Typography variant="subtitle2">
            {props.event}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <EditTimelineEventModal isOpen={openModal} closeModal={() => setOpenModal(false)} {...props} />
    </>
  );
};

TimelineEvent.propTypes = {
  isMostRecent: PropTypes.bool,
  date: PropTypes.string,
  event: PropTypes.string.isRequired
}

export default TimelineEvent;