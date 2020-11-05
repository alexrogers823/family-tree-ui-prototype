import React, { Fragment } from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  error: {
    color: 'red',
    fontStyle: 'italic'
  },
  link: {
    marginLeft: theme.spacing(0.5)
  }
}));

const Page500 = props => {
  const classes = useStyles();

  return (
      <Fragment>
        <p className={classes.error}>500: Server Error</p>
        <p>Uh-Oh! Internal issue. It's not you...it's me</p>
        <p>Give us a few seconds. Then refresh the page, or 
          <Link href="#" className={classes.link} onClick={e => e.preventDefault()}>
            contact the administrator
          </Link>
        .</p>
        <p>Adminstrator 
          <Link href="#" className={classes.link} onClick={e => e.preventDefault()}>
            email
          </Link>
        , (and his
          <Link href="#" className={classes.link} onClick={e => e.preventDefault()}>
            page
          </Link> 
        , while you're waiting)</p>
      </Fragment>
    )
};

export default Page500;