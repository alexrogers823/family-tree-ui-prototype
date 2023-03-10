
import { Typography as MuiTypography } from '@mui/material';
import React from 'react';

const Typography = props => (
  <MuiTypography {...props}>
    {props.children}
  </MuiTypography>
);

export default Typography;