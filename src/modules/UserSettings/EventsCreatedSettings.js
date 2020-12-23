import React, { Fragment } from 'react';
import Button from '../../components/common/Button';

const EventsCreatedSettings = props => {
  return (
    <Fragment>
      <p>{`No. of Events created: ${props.events.length}`}</p>
      {props.events.map(ev => {
        return (
          <div>
            <p>{`Event: ${ev.timelineEvent}`}</p>
            <p>{`Year: ${ev.year}`}</p>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        )
      })}
    </Fragment>
  )
};

// TODO: On click for edit will trigger edit event modal 
// TODO: On click for delete will trigger warning message before deleting 

export default EventsCreatedSettings;