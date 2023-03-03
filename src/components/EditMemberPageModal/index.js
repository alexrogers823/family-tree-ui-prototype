import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Date, RadioGroup, UploadButton } from '../common';
import Form, { TextArea } from '../common/Form';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import Member from '../../modules/Members/Member';

// const useStyles = makeStyles(theme => ({
//   inputs: {
//     margin: theme.spacing(2)
//   }
// }));

const EditMemberPageModal = props => {
  // const classes = useStyles();
  const [isDeceased, setIsDeceased] = useState(!props.isAlive);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: props.firstName,
      middleName: props.middleName || null,
      lastName: props.lastName,
      preferredName: props.preferredName || null,
      suffix: props.suffix || null,
      birthDay: props.birthDay,
      birthMonth: props.birthMonth,
      birthYear: props.birthYear,
      birthdate: props.birthdate || null,
      birthplace: props.birthplace,
      residence: props.residence,
      biography: props.biography || null,
      deathDay: props.deathDay || null,
      deathMonth: props.deathMonth || null,
      deathYear: props.deathYear || null,
      deceasedDate: props.deceasedDate || null,
      primaryParentId: props.primaryParentId || null,
      secondaryParentId: props.secondaryParentId || null,
      spouseId: props.spouseId || null,
      isAlive: props.isAlive,
      isInlaw: props.isInlaw
    }
  });

  // const onSubmit = data => console.log(data);

  const onSubmit = (data) => {
    if (data.isInlaw === "Yes") {
      data.isInlaw = true;
    } else {
      data.isInlaw = false;
    }

    console.log(data);
    try {
      fetch(`/api/members/${props.id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err);
    }
  };

  // console.dir(props);

  return (
    <Form 
      title={`Edit ${props.preferredName || props.firstName}'s page`}
      button="Save"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      isDeceased={isDeceased}
      onChange={e => setIsDeceased(e.target.checked)}
      onSubmit={handleSubmit(onSubmit)}
      enableDeceasedCheckbox
    >
      <FormGroup>
        <Date control={control} label="Birth (DOB)" keyLabel="birthdate" date={props.birthdate ? props.birthdate : null} />
        { isDeceased && 
          <Date control={control} label="Death" keyLabel="deceasedDate" date={props.deathYear ? `${props.deathYear}-${props.deathMonth}-${props.deathDay}` : null} /> } 
        <TextArea control={control} defaultValue={props.birthplace} label="Place of Birth" keyLabel="birthplace" placeholder="Ex: Los Angeles, CA" />
        <TextArea control={control} defaultValue={props.residence} label="Place of Residence" keyLabel="residence" placeholder="Ex: Chicago, IL" />
        <TextArea control={control} label="Biography" keyLabel="biography" placeholder={`Say something about ${props.preferredName || props.firstName} here`} multiline />
        <TextArea control={control} defaultValue={props.firstName} label="First Name" keyLabel="firstName" placeholder="Ex: John" />
        <TextArea control={control} defaultValue={props.middleName || null} label="Middle Name" keyLabel="middleName" placeholder="Ex: Josiah" />
        <TextArea control={control} defaultValue={props.lastName || null} label="Last Name" keyLabel="lastName" placeholder="Ex: Doe" />
        <TextArea control={control} defaultValue={props.preferredName || null} label="Preferred Name" keyLabel="preferredName" placeholder="Ex: Johnny" />
        <RadioGroup control={control} defaultValue={props.isInlaw} keyLabel="isInlaw" label="In Law?" options={["Yes", "No"]} />
        <TextArea control={control} defaultValue={props.spouseId || null} label="Spouse" keyLabel="spouseId" placeholder="Ex: Jane Doe" />
        <TextArea control={control} defaultValue={props.primaryParentId} label="Parent 1" keyLabel="primaryParentId" placeholder="This parent is related to others on the main family tree" />
        <TextArea control={control} defaultValue={props.secondaryParentId} label="Parent 2 (if applicable)" keyLabel="secondaryParentId" placeholder="This parent is an in-law in relation to others on the family tree" />
        <TextArea control={control} defaultValue={props.suffix || null} label="Suffix" keyLabel="suffix" placeholder="Ex: Jr." />
        <UploadButton title="Update Photo" />
        {/* <TextArea label="Children (if applicable)" /> */}
      </FormGroup>
    </Form>
  );
};

export default EditMemberPageModal;