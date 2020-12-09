import React from 'react';
import Form, { TextArea } from '../common/Form';

const Login = props => {
  return (
    <Form 
      title="Login"
      button="Log In"
      isOpen={props.isOpen}
      closeModal={props.closeModal}
    >
      <TextArea placeholder="Username (Email)" fullWidth />
      <TextArea placeholder="Password" fullWidth />
    </Form>
  );
};

export default Login;