import React, { useEffect, useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Date, RadioGroup } from '../common';
import Form, { TextArea } from '../common/Form';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
import { addFamilyMember } from '../../redux/actions';
import MemberReducer from '../../modules/Members/redux/reducer';
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

  const [isDeceased, setIsDeceased] = useState(false);
  const [state, dispatch] = useReducer(MemberReducer, {});

  // const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: { //remove these values after fixing date logic
      birthDay: 14,
      birthMonth: 2,
      birthYear: 2020,
      birthdate: props.birthdate || null,
      isAlive: true,
      isInlaw: false
    }
  });

  const addParagraph = () => {
    const index = bioParagraphs.length + 1;
    setBioParagraphs([
      ...bioParagraphs, 
      <TextArea control={control} label={`Bio Paragraph #${index}`} keyLabel={`paragraph${index}`} placeholder="lorem ipsum..." />
    ]);
  }

    // const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
      if (data.isInlaw === "Yes") {
        data.isInlaw = true;
      } else {
        data.isInlaw = false;
      }

      console.log(data);
      try {
        fetch("/api/members/", {
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json;charset=UTF-8"
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(member => {
          console.log('calling member: ', member)
          dispatch(addFamilyMember(member))
        })
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <Form 
      title="Add Family Member"
      button="Add Member"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      isDeceased={isDeceased}
      onChange={e => setIsDeceased(e.target.checked)}
      onSubmit={handleSubmit(onSubmit)}
      enableDeceasedCheckbox
    >
      <FormGroup>
        <TextArea control={control} label="First Name" keyLabel="firstName" placeholder="Ex: John" />
        <TextArea control={control} label="Middle Name" keyLabel="middleName" placeholder="Ex: Josiah" />
        <TextArea control={control} label="Last Name" keyLabel="lastName" placeholder="Ex: Doe" />
        <TextArea control={control} label="Suffix" keyLabel="suffix" placeholder="Ex: Jr." />
        <TextArea control={control} label="Preferred Name (if not First Name)" keyLabel="preferredName" placeholder="Ex: Johnny" />
        <RadioGroup control={control} defaultValue={props.isInlaw} keyLabel="isInlaw" label="In Law?" options={["Yes", "No"]} />
        {/* <TextArea control={control} placeholder="Related Family Member" /> */}
        {/* <TextArea control={control} placeholder="Relation" /> */}
        <Date control={control} label="Date of Birth" keyLabel="birthdate" />
        { isDeceased &&
          <Date control={control} label="Death" keyLabel="deceasedDate" /> }
        <TextArea control={control} label="Spouse (if applicable)" keyLabel="spouse" placeholder="Ex: Jane Doe" />
        {/* <TextArea control={control} placeholder="Photo" /> */}
        <TextArea control={control} label="Place of Birth" keyLabel="birthplace" placeholder="Ex: Los Angeles, CA" />
        { !isDeceased && 
          <TextArea control={control} label="Place of Residence" keyLabel="residence" placeholder="Ex: Chicago, IL" /> }
        {/* {bioParagraphs}
        {
          bioParagraphs.length < 5 &&
          <Button onClick={addParagraph}>Add Paragraph</Button>
        } */}
      </FormGroup>
    </Form>
  )
}

export default AddMemberModal;