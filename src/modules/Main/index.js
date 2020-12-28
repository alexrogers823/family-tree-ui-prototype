import React, { Fragment, useState } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  galleryUrl,
  lineageUrl,
  timelineUrl,
} from '../../urls';

import Link from '../../components/common/Link';
import ContactAdminModal from '../../components/ContactAdminModal';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  text: {
    fontStyle: 'italic',
    textAlign: 'justify',
  },
}));

const Main = () => {
  const classes = useStyles();

  const [openContactAdmin, setOpenContactAdmin] = useState(false);

  return (
    <Fragment>
      <Paper className={classes.root} elevation={3}>
        <p className={classes.text}>Welcome to the family website!</p>

        <p className={classes.text}>
          Explore our roots by seeing the new  
          <Link
            href={lineageUrl}
          >
            family tree
          </Link>
          , checking out  
          <Link
            href={galleryUrl}
          >
            pictures
          </Link>
          , or finding out more about a specific person.
        </p>

        <p className={classes.text}>
          You can also contribute to our family  
          <Link
            href={timelineUrl}
          >
            timeline
          </Link>
          .
        </p>

        <p className={classes.text}>
          If you're having issues or need help, 
          <Link
            onClick={() => setOpenContactAdmin(true)}
          >
            contact the administrator
          </Link>
          .
        </p>

        <p className={classes.text}>Enjoy our history!</p>
      </Paper>
      <ContactAdminModal isOpen={openContactAdmin} closeModal={() => setOpenContactAdmin(false)} />
    </Fragment>
  );
};

export default Main;