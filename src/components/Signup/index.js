import React from 'react';
import { Date } from '../common';
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

const Signup = props => {
  // const classes = useStyles();

  return (
    <Form 
      title="Welcome to the Family!"
      button="Join Us"
      maxWidth="xl"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
      fullWidth
    >
      <TextArea placeholder="Email" type="email" />
      <TextArea placeholder="First Name" />
      <TextArea placeholder="Middle Name" />
      <TextArea placeholder="Last Name" />
      <TextArea placeholder="Suffix" />
      <TextArea placeholder="Preferred Name" />
      <TextArea placeholder="Family Member 1" />
      <TextArea placeholder="Family Member 2" />
      <TextArea placeholder="Spouse" />
      {/* <TextArea placeholder="Date of Birth" /> */}
      <Date label="Date of Birth" />
      <TextArea placeholder="Photo" />
      <TextArea placeholder="Password" type="password" />
      <TextArea placeholder="Repeat Password" type="password" />
    </Form>
  );
};

export default Signup;