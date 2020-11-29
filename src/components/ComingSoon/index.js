import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header';
import Footer from '../Footer';

const useStyles = makeStyles({
  root: {
    padding: 20,
    backgroundColor: 'rgba(47, 115, 169, 0.3)'
  },
});

const ComingSoon = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Header />
        <div className={classes.root}>
          <h1>Coming Soon!</h1>
          <p>This page hasn't been created yet, but we promise we're working on it!</p>
          <p>Check back later and it'll probably be here.</p>
        </div>
      <Footer />
    </Fragment>
  )
};

export default ComingSoon;