import React from 'react';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';
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

const Signup = props => {
  const classes = useStyles();

  return (
    <Form 
      title="Welcome to the Family!"
      maxWidth="xl"
      fullWidth
    >
      <TextArea className={classes.inputs} placeholder="Email" type="email" />
      <TextArea className={classes.inputs} placeholder="First Name" />
      <TextArea className={classes.inputs} placeholder="Middle Name" />
      <TextArea className={classes.inputs} placeholder="Last Name" />
      <TextArea className={classes.inputs} placeholder="Suffix" />
      <TextArea className={classes.inputs} placeholder="Preferred Name" />
      <TextArea className={classes.inputs} placeholder="Family Member 1" />
      <TextArea className={classes.inputs} placeholder="Family Member 2" />
      <TextArea className={classes.inputs} placeholder="Spouse" />
      {/* <TextArea className={classes.inputs} placeholder="Date of Birth" /> */}
      <Date className={classes.inputs} label="Date of Birth" />
      <TextArea className={classes.inputs} placeholder="Photo" />
      <TextArea className={classes.inputs} placeholder="Password" type="password" />
      <TextArea className={classes.inputs} placeholder="Repeat Password" type="password" />
    </Form>
  );
};

export default Signup;