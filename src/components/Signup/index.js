import React from 'react';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';
import { FormGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
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

const Signup = props => {
  // const classes = useStyles();
  const { control, handleSubmit } = useForm({});

  const onSubmit = data => console.log(data);

  return (
    <Form 
      title="Welcome to the Family!"
      button="Join Us"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      onSubmit={() => handleSubmit(onSubmit)}
      fullWidth
    >
      <FormGroup>

        <TextArea control={control} label="Email" keyLabel="email" type="email" placeholder="johndoe@gmail.com" />
        <TextArea control={control} label="First Name" keyLabel="firstName" placeholder="John" />
        <TextArea control={control} label="Middle Name" keyLabel="middleName" placeholder="Jacob" />
        <TextArea control={control} label="Last Name" keyLabel="lastName" placeholder="Doe" />
        <TextArea control={control} label="Suffix" keyLabel="suffix" placeholder="Jr." />
        <TextArea control={control} label="Preferred Name" keyLabel="preferredName" placeholder="Johnny" />
        {/* <TextArea control={control} placeholder="Family Member 1" /> */}
        {/* <TextArea control={control} placeholder="Family Member 2" /> */}
        <TextArea control={control} label="Spouse" keyLabel="spouse" placeholder="Jane Doe" />
        <Date control={control} label="Date of Birth" keyLabel="birthdate" />
        {/* <TextArea control={control} label="Photo" /> */}
        <TextArea control={control} label="Password" keyLabel="password" type="password" />
        <TextArea control={control} label="Repeat Password" keyLabel="confirmPassword" type="password" />
      </FormGroup>
    </Form>
  );
};

export default Signup;