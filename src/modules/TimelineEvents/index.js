import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';

const TimelineEvents = props => {
  return props.timelineEvents.map(ev => {
    return (
      <Timeline year={ev.year} event={ev.timelineEvent} key={ev.id} />
    )
  })
};

TimelineEvents.propTypes = {
  timelineEvents: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineEvents;