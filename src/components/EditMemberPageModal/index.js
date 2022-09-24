import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

const useStyles = makeStyles(theme => ({
  inputs: {
    margin: theme.spacing(2)
  }
}));

const EditMemberPageModal = props => {
  const classes = useStyles();

  return (
    <Form 
      title={`Edit ${props.preferredName || props.firstName}'s page`}
      button="Save"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea className={classes.inputs} placeholder="(Photo here)" />
      <Date className={classes.inputs} label="Birth (DOB)" />
      <Date className={classes.inputs} label="Death" />
      <TextArea className={classes.inputs} defaultValue={props.birthplace} placeholder="Place of Birth" />
      <TextArea className={classes.inputs} defaultValue={props.residence} placeholder="Place of Residence" />
      <TextArea className={classes.inputs} placeholder="Bio" />
      <TextArea className={classes.inputs} defaultValue={props.spouse || null} placeholder="Spouse" />
      <TextArea className={classes.inputs} defaultValue={props.firstName} placeholder="First Name" />
      <TextArea className={classes.inputs} defaultValue={props.middleName || null} placeholder="Middle Name" />
      <TextArea className={classes.inputs} defaultValue={props.lastName || null} placeholder="Last Name" />
      <TextArea className={classes.inputs} defaultValue={props.preferredName || null} placeholder="Preferred Name" />
      <TextArea className={classes.inputs} placeholder="Parents (if blank)" />
      <TextArea className={classes.inputs} defaultValue={props.suffix || null} placeholder="Suffix" />
      <TextArea className={classes.inputs} placeholder="Children (if applicable)" />
    </Form>
  );
};

export default EditMemberPageModal;