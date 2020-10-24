import React, { Fragment } from 'react';
import { Link } from '@material-ui/core';

const Page404 = props => (
  <Fragment>
    <p>404: Not Found</p>
    <p>Uh-Oh! Looks like that branch isn't on this tree</p>
    <p>Refine your search, or
      <Link href="#" onClick={e => e.preventDefault()}>
        go back to the last page
      </Link> 
    .</p>
  </Fragment>
);

export default Page404;