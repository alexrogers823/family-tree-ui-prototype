import React from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footerItem: {
    margin: theme.spacing(2),
  },
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <div>
      <span className={classes.footerItem}>CFPG Family Tree</span>
      <span className={classes.footerItem}>&copy; 2020</span>
      <Link className={classes.footerItem} target="new" href="https://github.com/alexrogers823/family-tree-ui-prototype">Source Code</Link>
    </div>
  );
};

export default Footer;