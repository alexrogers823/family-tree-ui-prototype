import React from 'react';
import { Link as MuiLink } from '@mui/material';

const Link = props => {
  return (
    <MuiLink
      sx={(theme) => ({
        ml: theme.spacing(0.5)
      })}
      href={props.href || "#"}
      onClick={props.onClick}
      >
      {props.children}
    </MuiLink>
  )
};

export default Link;