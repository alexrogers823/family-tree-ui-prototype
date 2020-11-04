import React, { Fragment } from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
  link: {
    marginLeft: theme.spacing(0.5)
  }
}));

const Page404 = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <p className={classes.error}>404: Not Found</p>
      <p>Uh-Oh! Looks like that branch isn't on this tree</p>
      <p>Refine your search, or
        <Link href="#" className={classes.link} onClick={e => e.preventDefault()}>
          go back to the last page
        </Link> 
      .</p>
    </Fragment>
  )
};

export default Page404;