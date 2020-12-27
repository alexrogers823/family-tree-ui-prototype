import React, { Fragment } from 'react';

// page specifically for family documents (marriage licenses, deeds, etc) 
const Artifacts = props => {
  return (
    <Fragment>
      <h1>Artifacts</h1>
      { props.photos
        ? <p>A lot of photos</p>
        : <p>Add important family documents to see them here!</p>
      }
    </Fragment>
  )
};

export default Artifacts;