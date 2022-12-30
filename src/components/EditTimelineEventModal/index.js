import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormGroup } from '@mui/material';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';


const EditTimelineEventModal = props => {

  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      day: props.day || 17,
      month: props.month || 3,
      year: props.year || 2010
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    try {
      fetch(`/api/timeline/${props.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form 
      title={`Edit event '${props.event}'`}
      button="CHANGE IT!"
      isOpen={props.isOpen}
      onSubmit={handleSubmit(onSubmit)}
      closeModal={props.closeModal}
    >
      <FormGroup>
        <Date control={control} label="Event Date" keyLabel="eventDate" />
        <TextArea 
          control={control}
          label="Event" 
          keyLabel="event"
          defaultValue={props.event}
          placeholder='Say in present tense. Ex "Bob graduates college..."'
          fullWidth
          multiline
          />
      </FormGroup>
    </Form>
  );
}

export default EditTimelineEventModal;