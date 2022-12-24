import React, { useState } from 'react';
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

  const [isDeceased, setIsDeceased] = useState(!props.isAlive);

  return (
    <Form 
      title={`Edit ${props.preferredName || props.firstName}'s page`}
      button="Save"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      isDeceased={isDeceased}
      onChange={e => setIsDeceased(e.target.checked)}
    >
      {/* <TextArea label="(Photo here)" /> */}
      <Date label="Birth (DOB)" date={`${props.birthYear}-${props.birthMonth}-${props.birthDay}`} />
      { isDeceased && 
        <Date label="Death" date={props.deathYear ? `${props.deathYear}-${props.deathMonth}-${props.deathDay}` : null} /> }
      <TextArea defaultValue={props.birthplace} label="Place of Birth" placeholder="Ex: Los Angeles, CA" />
      <TextArea defaultValue={props.residence} label="Place of Residence" placeholder="Ex: Chicago, IL" />
      <TextArea label="Bio" placeholder={`Say something about ${props.preferredName || props.firstName} here`} multiline />
      <TextArea defaultValue={props.spouse || null} label="Spouse" placeholder="Ex: Jane Doe" />
      <TextArea defaultValue={props.firstName} label="First Name" placeholder="Ex: John" />
      <TextArea defaultValue={props.middleName || null} label="Middle Name" placeholder="Ex: Josiah" />
      <TextArea defaultValue={props.lastName || null} label="Last Name" placeholder="Ex: Doe" />
      <TextArea defaultValue={props.preferredName || null} label="Preferred Name" placeholder="Ex: Johnny" />
      {/* <TextArea label="Parents (if blank)" /> */}
      <TextArea defaultValue={props.suffix || null} label="Suffix" placeholder="Ex: Jr." />
      {/* <TextArea label="Children (if applicable)" /> */}
    </Form>
  );
};

export default EditMemberPageModal;