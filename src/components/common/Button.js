import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = props => (
  <MuiButton 
    variant="contained"
    onClick={props.onClick}
    {...props}
  >
    {props.children}
  </MuiButton>
);

export default Button;