import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
import { Date, RadioGroup, UploadButton, Autocomplete } from '../common';
import Form, { TextArea } from '../common/Form';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import Member from '../../modules/Members/Member';
import { mapMemberToId, searchMember } from '../../utils';

// const useStyles = makeStyles(theme => ({
//   inputs: {
//     margin: theme.spacing(2)
//   }
// }));

const EditMemberPageModal = props => {
  // const classes = useStyles();
  const [isDeceased, setIsDeceased] = useState(!props.isAlive);
  const familyMembers = useSelector(state => state.membersReducer.members);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: props.firstName,
      middleName: props.middleName || null,
      lastName: props.lastName,
      preferredName: props.preferredName || null,
      suffix: props.suffix || null,
      birthdate: props.birthdate || null,
      birthplace: props.birthplace,
      residence: props.residence,
      biography: props.biography || null,
      deceasedDate: props.deceasedDate || null,
      primaryParent: props.primaryParent || null,
      primaryParentId: props.primaryParentId || null,
      secondaryParent: props.secondaryParent || null,
      secondaryParentId: props.secondaryParentId || null,
      spouse: props.spouse || null,
      spouseId: props.spouseId || null,
      isAlive: props.isAlive,
      isInlaw: props.isInlaw,
      profilePhotoUrl: props.profilePhotoUrl || null
    }
  });

  const handleUploadImage = e => {

  }

  // const onSubmit = data => {
  //   data.primaryParentId = mapMemberToId(familyMembers, data.primaryParent);
  //   data.secondaryParentId = mapMemberToId(familyMembers, data.secondaryParent);
  //   data.spouseId = mapMemberToId(familyMembers, data.spouse);
  //   console.log(data);
  // }
  
  const onSubmit = data => {
    if (data.isInlaw === "Yes") {
      data.isInlaw = true;
    } else {
      data.isInlaw = false;
    }

    data.primaryParentId = mapMemberToId(familyMembers, data.primaryParent);
    data.secondaryParentId = mapMemberToId(familyMembers, data.secondaryParent);
    data.spouseId = mapMemberToId(familyMembers, data.spouse);

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
        <Autocomplete 
          control={control} 
          label="Spouse (if applicable)" 
          // defaultValue={searchMember(familyMembers.filter(member => member.id === props.primaryParentId))} //not working because it returns array of data instead of data itself
          keyLabel="spouse" 
          options={familyMembers}
          getOptionLabel={option => option ? searchMember(option) : ''}
          placeholder="Ex: Jane Doe" 
        />
        <Autocomplete 
          control={control} 
          label="Parent 1" 
          // defaultValue={searchMember(familyMembers.filter(member => member.id === props.primaryParentId))} //not working because it returns array of data instead of data itself
          keyLabel="primaryParent" 
          options={familyMembers}
          getOptionLabel={option => option ? searchMember(option) : ''}
          placeholder="This parent is related to others on the main family tree" 
        />
        <Autocomplete 
          control={control} 
          label="Parent 2 (if applicable)" 
          // defaultValue={searchMember(familyMembers.filter(member => member.id === props.primaryParentId))} //not working because it returns array of data instead of data itself
          keyLabel="secondaryParent" 
          options={familyMembers}
          getOptionLabel={option => option ? searchMember(option) : ''}
          placeholder="This parent is an in-law in relation to others on the family tree" 
        />
        <TextArea control={control} defaultValue={props.suffix || null} label="Suffix" keyLabel="suffix" placeholder="Ex: Jr." />
        <UploadButton control={control} label="Update Photo" keyLabel="profilePhotoUrl" />
        {/* <TextArea label="Children (if applicable)" /> */}
      </FormGroup>
    </Form>
  );
};

export default EditMemberPageModal;