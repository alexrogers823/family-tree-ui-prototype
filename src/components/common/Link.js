import { Link as MuiLink } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = props => {
  const CustomLink = props => <RouterLink to={props.href} {...props} />

  return (
    <MuiLink
      component={RouterLink}
      sx={(theme) => ({
        ml: theme.spacing(0.5)
      })}
      color={props.color || "primary"}
      to={props.href || "#"}
      underline={props.underline || "always"}
      onClick={props.onClick}
      >
      {props.children}
    </MuiLink>
  )
};

export default Link;