import React from 'react';
import { useForm } from 'react-hook-form';
import Form, { TextArea } from '../common/Form';

const ContactAdminModal = props => {

  const { control, handleSubmit } = useForm({})

  const onSubmit = data => console.log(data);

  return (
    <Form
      title="Contact Administrator"
      button="Submit"
      maxWidth="xl"
      isOpen={props.isOpen}
      onSubmit={handleSubmit(onSubmit)}
      closeModal={props.closeModal}
    >
      <TextArea
        control={control}
        label="Question for Admin"
        keyLabel="question"
        placeholder="Ask a question..." 
        fullWidth
        multiline
      />
    </Form>
  )
};

export default ContactAdminModal;
