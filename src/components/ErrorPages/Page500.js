import React, { Fragment } from 'react';
import Link from '../common/Link';

const Page500 = props => {
  return (
      <Fragment>
        <p 
          sx={{
            color: 'red',
            fontStyle: 'italic'
          }}
          >
          500: Server Error
        </p>
        <p>Uh-Oh! Internal issue. It's not you...it's me</p>
        <p>Give us a few seconds. Then refresh the page, or 
          <Link href="#" onClick={e => e.preventDefault()}>
            contact the administrator
          </Link>
        .</p>
        <p>Adminstrator 
          <Link href="#" onClick={e => e.preventDefault()}>
            email
          </Link>
        , (and his
          <Link href="#" onClick={e => e.preventDefault()}>
            page
          </Link> 
        , while you're waiting)</p>
      </Fragment>
    )
};

export default Page500;