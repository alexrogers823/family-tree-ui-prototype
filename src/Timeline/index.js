import React from 'react';

const Timeline = props => {
  return (
    <div>
      <p>{props.year}</p>
      <p>{props.event}</p>
    </div>
  );
};

export default Timeline;