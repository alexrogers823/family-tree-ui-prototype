import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

const Button = props => (
  <MaterialButton 
    variant="contained"
    onClick={props.onClick}
    {...props}
  >
    {props.children}
  </MaterialButton>
);

export default Button;