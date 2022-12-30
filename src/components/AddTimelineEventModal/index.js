import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { FormGroup } from '@mui/material';

import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

import { createTimelineEvent } from '../../redux/actions';

const AddTimelineEventModal = props => {
  const [newEvent, setNewEvent] = useState({
    id: 6,
    createdOn: null,
    createdByUserId: 17,
  });

  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      day: 17,
      month: 3,
      year: 2010
    }
  });

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

  // const onSubmit = data => console.log(data);

  const onSubmit = (data) => {
    console.log(data);
    try {
      fetch("/api/timeline/", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(timelineEvent => {
        console.log('calling event: ', timelineEvent)
        dispatch(createTimelineEvent(timelineEvent))
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form 
      title="Add an event"
      button="POST IT!"
      isOpen={props.isOpen}
      // onClick={() => dispatch(createTimelineEvent(newEvent))}
      onSubmit={handleSubmit(onSubmit)}
      closeModal={props.closeModal}
    >
      <FormGroup>
        <Date control={control} label="Event Date" keyLabel="eventDate" />
        <TextArea 
          control={control}
          label="Event" 
          keyLabel="event"
          placeholder='Say in present tense. Ex "Bob graduates college..."'
          fullWidth
          multiline
          />
      </FormGroup>
    </Form>
  );
};

export default AddTimelineEventModal;