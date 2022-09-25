import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

// const useStyles = makeStyles(theme => ({
//   inputs: {
//     margin: theme.spacing(2)
//   }
// }));

const EditMemberPageModal = props => {
  // const classes = useStyles();

  return (
    <Form 
      title={`Edit ${props.preferredName || props.firstName}'s page`}
      button="Save"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea placeholder="(Photo here)" />
      <Date label="Birth (DOB)" />
      <Date label="Death" />
      <TextArea defaultValue={props.birthplace} placeholder="Place of Birth" />
      <TextArea defaultValue={props.residence} placeholder="Place of Residence" />
      <TextArea placeholder="Bio" />
      <TextArea defaultValue={props.spouse || null} placeholder="Spouse" />
      <TextArea defaultValue={props.firstName} placeholder="First Name" />
      <TextArea defaultValue={props.middleName || null} placeholder="Middle Name" />
      <TextArea defaultValue={props.lastName || null} placeholder="Last Name" />
      <TextArea defaultValue={props.preferredName || null} placeholder="Preferred Name" />
      <TextArea placeholder="Parents (if blank)" />
      <TextArea defaultValue={props.suffix || null} placeholder="Suffix" />
      <TextArea placeholder="Children (if applicable)" />
    </Form>
  );
};

export default EditMemberPageModal;