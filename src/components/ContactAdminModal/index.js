import React from 'react';
import Form, { TextArea } from '../common/Form';

const ContactAdminModal = props => {
  return (
    <Form
      title="Contact Administrator"
      button="Submit"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea
        label="Question for Admin" 
        placeholder="Ask a question..." 
        fullWidth
        multiline
      />
    </Form>
  )
};

export default ContactAdminModal;
