import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Date, Button, Modal } from '../common';
import Form, { TextArea } from '../common/Form';

import { createTimelineEvent } from '../../modules/TimelineEvents/redux/actions';

const AddEventModal = props => {
  const [newEvent, setNewEvent] = useState('test');
  const dispatch = useDispatch();

  console.log('new event', newEvent);

  return (
    <Form 
      title="Add an event"
      button="POST IT!"
      isOpen={props.isOpen}
      onClick={() => dispatch(createTimelineEvent(newEvent))}
      closeModal={props.closeModal}
      onChange={e => setNewEvent(e.target.value)}
    >
      <Date label="Event Date" />
      <TextArea 
        label="Event" 
        placeholder='Say in present tense. Ex "Bob graduates college..."'
        fullWidth
        multiline
      />
    </Form>
  );
};

export default AddEventModal;