import React from 'react';
import { Date } from '../common';
import Form, { TextArea } from '../common/Form';

const Signup = props => {
  return (
    // <div>
    //   <h3>Welcome to the Family!</h3>
    //   <input type="text" placeholder="Email" />
    //   <input type="text" placeholder="First Name" />
    //   <input type="text" placeholder="Middle Name" />
    //   <input type="text" placeholder="Last Name" />
    //   <input type="text" placeholder="Suffix" />
    //   <input type="text" placeholder="Preferred Name" />
    //   <input type="text" placeholder="Family Member 1 | Relationship" />
    //   <input type="text" placeholder="Family Member 2 | Relationship" />
    //   <input type="text" placeholder="Spouse" />
    //   <input type="text" placeholder="Date of Birth" />
    //   <input type="text" placeholder="Photo" />
    // </div>
    <Form 
      title="Welcome to the Family!"
      maxWidth="xl"
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