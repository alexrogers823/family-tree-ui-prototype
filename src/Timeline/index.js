import React from 'react';

const Timeline = props => {
  return (
    <div>
      <p>{props.year}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Timeline;