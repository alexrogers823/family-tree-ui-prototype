import React from 'react';
import { Date, Button, Modal } from '../common';
import Form, { TextArea } from '../common/Form';

const AddEventModal = props => {
  return (
    // <Modal>
    //   <h1>Add an event</h1>
      // <input type="text" placeholder="Date (MM/DD/YYYY)" />
      // <textarea placeholder="Event" />
    //   <Button>POST IT!</Button>
    // </Modal>
    <Form 
      title="Add an event"
      button="POST IT!"
    >
      <Date label="Event Date" />
      <TextArea 
        label="Event" 
        placeholder='Say in present tense. Ex "Bob graduates college..."'
        multiline
      />
    </Form>
  );
};

export default AddEventModal;