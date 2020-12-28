import React from 'react';
import { Link as MaterialLink } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: theme.spacing(0.5)
  }
}));

const Link = props => {
  const classes = useStyles();

  return (
    <MaterialLink
      className={classes.link}
      href={props.href || "#"}
      onClick={props.onClick}
    >
      {props.children}
    </MaterialLink>
  )
};

export default Link;