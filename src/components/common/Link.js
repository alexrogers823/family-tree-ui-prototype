import React from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';

const Link = props => {
  const CustomLink = props => <RouterLink to={props.href} {...props} />

  return (
    <MuiLink
      sx={(theme) => ({
        ml: theme.spacing(0.5)
      })}
      color={props.color || "primary"}
      href={props.href || "#"}
      underline={props.underline || "always"}
      onClick={props.onClick}
      >
      {props.children}
    </MuiLink>
  )

  // return (
  //   <MuiLink
  //     component={RouterLink}
  //     sx={(theme) => ({
  //       ml: theme.spacing(0.5)
  //     })}
  //     color={props.color || "primary"}
  //     to={props.href || "#"}
  //     underline={props.underline || "always"}
  //     onClick={props.onClick}
  //     >
  //     {props.children}
  //   </MuiLink>
  // )
};

export default Link;