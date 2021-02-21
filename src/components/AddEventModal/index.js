import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Date, Button, Modal } from '../common';
import Form, { TextArea } from '../common/Form';

import { postNewEvent } from '../../modules/TimelineEvents/redux/actions';

const AddEventModal = props => {
  // const [newEvent, setNewEvent] = useState({});

  return (
    <Form 
      title="Add an event"
      button="POST IT!"
      isOpen={props.isOpen}
      onClick={props.postNewEvent}
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

const mapDispatchToProps = dispatch => {
  return {
    postNewEvent: newEvent => dispatch(postNewEvent(newEvent))
  }
}

export default connect(
  null,
  mapDispatchToProps 
)(AddEventModal);