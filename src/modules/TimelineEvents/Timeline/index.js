import React from 'react';
import PropTypes from 'prop-types';

const Timeline = props => {
  return (
    <p>Timeline test. Use accordion.</p>
  );
};

Timeline.propTypes = {
  year: PropTypes.number.isRequired,
  timelineEvent: PropTypes.string.isRequired
}

export default Timeline;