import React, { useEffect, useState } from 'react';
import { Date, Button } from '../common';
import Form, { TextArea } from '../common/Form';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   title: {
//     textDecoration: 'italic',
//     color: 'green',
//   },
//   inputs: {
//     margin: theme.spacing(2),
//   },
// }));

const AddMemberModal = props => {
  // const classes = useStyles();

  const [bioParagraphs, setBioParagraphs] = useState([
    <TextArea placeholder="Bio Paragraph #1" />
  ]);

  const addParagraph = () => {
    const index = bioParagraphs.length + 1;
    setBioParagraphs([
      ...bioParagraphs, 
      <TextArea placeholder={`Bio Paragraph #${index}`} />
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
      <TextArea placeholder="First Name" />
      <TextArea placeholder="Middle Name" />
      <TextArea placeholder="Last Name" />
      <TextArea placeholder="Suffix" />
      <TextArea placeholder="Preferred Name" />
      <TextArea placeholder="Related Family Member" />
      <TextArea placeholder="Relation" />
      <Date label="DOB" />
      <Date label="Death (if applicable)" />
      <TextArea placeholder="Spouse (if applicable)" />
      <TextArea placeholder="Photo" />
      <TextArea placeholder="Place of Birth" />
      <TextArea placeholder="Place of Residence (if alive)" />
      {bioParagraphs}
      {
        bioParagraphs.length < 5 &&
        <Button onClick={addParagraph}>Add Paragraph</Button>
      }
    </Form>
  )
}

export default AddMemberModal;