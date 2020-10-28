import React from 'react';
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
      <a className={classes.footerItem} href="#">Source Code</a>
    </div>
  );
};

export default Footer;