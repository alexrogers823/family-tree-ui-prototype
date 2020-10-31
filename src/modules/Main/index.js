import React from 'react';
import { Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  text: {
    fontStyle: 'italic',
  },
  link: {
    marginLeft: theme.spacing(0.5),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <p className={classes.text}>Welcome to the family website!</p>

      <p className={classes.text}>
        Explore our roots by seeing the new  
        <Link
          className={classes.link}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          family tree
        </Link>
        , checking out  
        <Link
          className={classes.link}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          pictures
        </Link>
        , or finding out more about a specific person.
      </p>

      <p className={classes.text}>
        You can also contribute to our family  
        <Link
          className={classes.link}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          timeline
        </Link>
        .
      </p>

      <p className={classes.text}>
        If you're having issues or need help, 
        <Link
          className={classes.link} 
          href="#" 
          onClick={(e) => e.preventDefault()}
        >
          contact the adminstrator
        </Link>
        .
      </p>

      <p className={classes.text}>Enjoy our history!</p>
    </Paper>
  );
};

export default Main;