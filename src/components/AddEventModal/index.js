import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { connect } from 'react-redux';
import { Date, Button, Modal } from '../common';
import Form, { TextArea } from '../common/Form';

import { createTimelineEvent } from '../../redux/actions';

const AddEventModal = props => {
  const [newEvent, setNewEvent] = useState({
    id: 6,
    createdOn: null,
    createdByUserId: 17,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const currentDay = moment();
    
    setNewEvent({
      ...newEvent,
      day: currentDay.date(),
      month: currentDay.month() + 1,
      year: currentDay.year()
    })
  }, [])

  const formatDateToEvent = date => {
    const newDate = moment(date);
    // console.log('from parent element', moment(date).year());
    setNewEvent({
      ...newEvent,
      day: newDate.date(),
      month: newDate.month() + 1,
      year: newDate.year()
    })
  }

  return (
    <Form 
      title="Add an event"
      button="POST IT!"
      isOpen={props.isOpen}
      onClick={() => dispatch(createTimelineEvent(newEvent))}
      closeModal={props.closeModal}
    >
      <Date label="Event Date" onChange={formatDateToEvent} />
      <TextArea 
        label="Event" 
        placeholder='Say in present tense. Ex "Bob graduates college..."'
        onChange={e => setNewEvent({ ...newEvent, timelineEvent: e.target.value})}
        fullWidth
        multiline
      />
    </Form>
  );
};

export default AddEventModal;