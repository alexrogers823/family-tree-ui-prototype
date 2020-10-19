import React from 'react';
import Form, { TextArea } from '../common/Form';

const Login = props => {
  return (
    // <div>
    //   <h1>Login</h1>
    //   <input type="text" placeholder="Username (Email)" />
    //   <input type="text" placeholder="Password" />
    // </div>
    <Form title="Login">
      <TextArea placeholder="Username (Email)" fullWidth />
      <TextArea placeholder="Password" fullWidth />
    </Form>
  );
};

export default Login;