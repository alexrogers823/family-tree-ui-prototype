import React from 'react';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

const AddMemberModal = props => {
  return (
    <Form 
      title="Add Family Member"
      button="Add Member"
    >
      <TextArea placeholder="First Name" />
      <TextArea placeholder="Middle Name" />
      <TextArea placeholder="Last Name" />
      <TextArea placeholder="Suffix" />
      <TextArea placeholder="Preferred Name" />
      <TextArea placeholder="Related Family Member" />
      <TextArea placeholder="Relation" />
      <Date label="DOB" />
      <TextArea placeholder="Spouse (if applicable)" />
      <TextArea placeholder="Photo" />
      <TextArea placeholder="Place of Birth" />
      <TextArea placeholder="Place of Residence (if alive)" />
    </Form>
  )
}

export default AddMemberModal;