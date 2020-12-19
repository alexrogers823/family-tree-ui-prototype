import React, { Fragment } from 'react';
import Button from '../common/Button';

const eventsCreatedSettings = props => {
  return (
    <Fragment>
      <p>No. of Events Created: 5</p>
      <div>
        <p>Event</p>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    </Fragment>
  )
};

// TODO: On click for edit will trigger edit event modal 
// TODO: On click for delete will trigger warning message before deleting 

export default eventsCreatedSettings;