import React from 'react';
import { Date, Button, Modal } from '../common';
import Form, { TextArea } from '../common/Form';

const AddEventModal = props => {
  return (
    <Form 
      title="Add an event"
      button="POST IT!"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
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