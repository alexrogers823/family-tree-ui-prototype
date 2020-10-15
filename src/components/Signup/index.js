import React from 'react';

const Signup = props => {
  return (
    <div>
      <h3>Welcome to the Family!</h3>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Middle Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Suffix" />
      <input type="text" placeholder="Preferred Name" />
      <input type="text" placeholder="Family Member 1 | Relationship" />
      <input type="text" placeholder="Family Member 2 | Relationship" />
      <input type="text" placeholder="Spouse" />
      <input type="text" placeholder="Date of Birth" />
      <input type="text" placeholder="Photo" />
    </div>
  );
};

export default Signup;