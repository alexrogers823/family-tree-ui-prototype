import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(47, 115, 169, 0.3)',
  }
});

const Base = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Base;