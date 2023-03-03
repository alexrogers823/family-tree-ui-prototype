import React from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions';
import { Date, RadioGroup, UploadButton } from '../common';
import Form, { TextArea } from '../common/Form';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';
import { useForm } from 'react-hook-form';
import { dispatch } from 'd3';
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

const RegisterModal = props => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      isInlaw: false,
      isAlive: true,
      primaryParentId: null,
      secondaryParentId: null,
      spouseId: null
    }
  });

  // const onSubmit = data => console.log(data);

  const onSubmit = async (data) => {
    if (data.isInlaw === "Yes") {
      data.isInlaw = true;
    }

    console.log(data);

    try {
      const userResult = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          preferredName: data.preferredName,
          email: data.email,
          password: data.password,
        })
      })
      const userJSON = await userResult.json();
      dispatch(createUser(userJSON));
      console.log("calling user: ", userJSON);

      const memberResult = await fetch("/api/members/", {
        method: "POST",
        headers: {
          "Accept": "application/json, text/plain",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          preferredName: data.preferredName,
          suffix: data.suffix,
          birthDay: 1, // just for testing
          birthdate: data.birthdate,
          birthplace: data.birthplace,
          residence: data.residence,
          // primaryParentId: data.primaryParentId || null,
          primaryParentId: 5, // just for testing
          secondaryParentId: data.secondaryParentId || null,
          spouseId: data.spouseId || null,
          isAlive: data.isAlive,
          isInlaw: data.isInlaw,
          userId: userJSON.id
        })
      })
      const memberJSON = await memberResult.json();
      console.log("calling new member: ", memberJSON);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form 
      title="Welcome to the Family!"
      button="Join Us"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      onSubmit={handleSubmit(onSubmit)}
      fullWidth
    >
      <FormGroup>
        <TextArea control={control} label="First Name" keyLabel="firstName" placeholder="John" />
        <TextArea control={control} label="Middle Name" keyLabel="middleName" placeholder="Jacob" />
        <TextArea control={control} label="Last Name" keyLabel="lastName" placeholder="Doe" />
        <TextArea control={control} label="Suffix" keyLabel="suffix" placeholder="Jr." />
        <TextArea control={control} label="Preferred Name (if not First Name)" keyLabel="preferredName" placeholder="Johnny" />
        <TextArea control={control} label="Parent 1" keyLabel="primaryParent" placeholder="Parent who is directly related to others" />
        <TextArea control={control} label="Parent 2 (if applicable)" keyLabel="secondaryParent" placeholder="Parent who is an in-law to others" />
        <TextArea control={control} label="Spouse (if applicable)" keyLabel="spouse" placeholder="Jane Doe" />
        <Date control={control} label="Date of Birth" keyLabel="birthdate" />
        <TextArea control={control} label="Place of Birth" keyLabel="birthplace" placeholder="Ex: Los Angeles, CA" />
        <TextArea control={control} label="Place of Residence" keyLabel="residence" placeholder="Ex: Chicago, IL" />
        <RadioGroup control={control}  keyLabel="isInlaw" label="Are you an in-law?" options={["Yes", "No"]} />
        <UploadButton title="Add Your Photo" />
        {/* <TextArea control={control} label="Photo" /> */}
        <TextArea control={control} label="Email" keyLabel="email" type="email" placeholder="johndoe@gmail.com" />
        <TextArea control={control} label="Password" keyLabel="password" type="password" />
        <TextArea control={control} label="Repeat Password" keyLabel="confirmPassword" type="password" />
      </FormGroup>
    </Form>
  );
};

export default RegisterModal;