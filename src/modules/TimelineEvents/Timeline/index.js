import React from 'react';
import PropTypes from 'prop-types';

const Timeline = props => {
  return (
    <div>
      <p>{props.year}</p>
      <p>{props.timelineEvent}</p>
    </div>
  );
};

Timeline.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default Timeline;