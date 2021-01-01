import React, { useEffect, useState } from 'react';
import { Date, Button } from '../common';
import Form, { TextArea } from '../common/Form';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: 'italic',
    color: 'green',
  },
  inputs: {
    margin: theme.spacing(2),
  },
}));

const AddMemberModal = props => {
  const classes = useStyles();

  const [bioParagraphs, setBioParagraphs] = useState([
    <TextArea className={classes.inputs} placeholder="Bio Paragraph #1" />
  ]);

  const addParagraph = () => {
    const index = bioParagraphs.length + 1;
    setBioParagraphs([
      ...bioParagraphs, 
      <TextArea className={classes.inputs} placeholder={`Bio Paragraph #${index}`} />
    ]);
  }

  return (
    <Form 
      title="Add Family Member"
      button="Add Member"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea className={classes.inputs} placeholder="First Name" />
      <TextArea className={classes.inputs} placeholder="Middle Name" />
      <TextArea className={classes.inputs} placeholder="Last Name" />
      <TextArea className={classes.inputs} placeholder="Suffix" />
      <TextArea className={classes.inputs} placeholder="Preferred Name" />
      <TextArea className={classes.inputs} placeholder="Related Family Member" />
      <TextArea className={classes.inputs} placeholder="Relation" />
      <Date className={classes.inputs} label="DOB" />
      <Date className={classes.inputs} label="Death (if applicable)" />
      <TextArea className={classes.inputs} placeholder="Spouse (if applicable)" />
      <TextArea className={classes.inputs} placeholder="Photo" />
      <TextArea className={classes.inputs} placeholder="Place of Birth" />
      <TextArea className={classes.inputs} placeholder="Place of Residence (if alive)" />
      {bioParagraphs}
      {
        bioParagraphs.length < 5 &&
        <Button onClick={addParagraph}>Add Paragraph</Button>
      }
    </Form>
  )
}

export default AddMemberModal;