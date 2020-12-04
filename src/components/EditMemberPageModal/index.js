import React from 'react';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

const EditMemberPageModal = props => {
  return (
    <Form 
      title={`Edit ${props.firstName}'s page`}
      button="Save"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea placeholder="(Photo here)" />
      <Date label="Birth (DOB)" />
      <Date label="Death" />
      <TextArea placeholder="Place of Birth" />
      <TextArea placeholder="Place of Residence" />
      <TextArea placeholder="Bio" />
      <TextArea placeholder="Spouse" />
      <TextArea placeholder="First Name" />
      <TextArea placeholder="Middle Name" />
      <TextArea placeholder="Last Name" />
      <TextArea placeholder="Preferred Name" />
      <TextArea placeholder="Parents (if blank)" />
      <TextArea placeholder="Suffix" />
      <TextArea placeholder="Children (if applicable)" />
    </Form>
  );
};

export default EditMemberPageModal;