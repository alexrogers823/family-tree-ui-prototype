import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

const Button = props => (
  <MaterialButton variant="contained">
    {props.children}
  </MaterialButton>
);

export default Button;