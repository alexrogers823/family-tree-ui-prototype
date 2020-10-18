import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Timeline from './Timeline';

const TimelineEvents = props => {
  return (
    <Fragment>
      <h1>Timeline of Family Events</h1>
      {props.timelineEvents.map(ev => {
        return (
          <Timeline 
            year={ev.year} 
            timelineEvent={ev.timelineEvent} 
            key={`event_${ev.id}`} 
          />
          )
        })}
    </Fragment>
  )
};

TimelineEvents.propTypes = {
  timelineEvents: PropTypes.arrayOf(PropTypes.object)
}

export default TimelineEvents;