import React, { Fragment } from 'react';

// page specifically for family documents (marriage licenses, deeds, etc) 
const Artifacts = props => {
  return (
    <Fragment>
      <h1>Artifacts</h1>
      {
        props.documents.map(document => {
          return (
            <h3>{document.description}</h3>
          )
        })
      }
    </Fragment>
  )
};

export default Artifacts;