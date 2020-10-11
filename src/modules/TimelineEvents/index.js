import React from 'react';
import Timeline from './Timeline';

const TimelineEvents = props => {
  return props.events.map(ev => {
    return (
      <Timeline year={ev.year} event={ev.timelineEvent} key={ev.id} />
    )
  })
}

export default TimelineEvents;