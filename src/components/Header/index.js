import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

const Header = props => {
  return (
    // <div>
    //   <a href="#">Tree</a>
    //   <a href="#">Timeline</a>
    //   <a href="#">Gallery</a>
    //   <a href="#">FAQ</a>
    // </div>
    <Breadcrumbs aria-label="header">
      <Link color="textPrimary" href="#">
        Tree
      </Link>
      <Link color="inherit" href="#">
        Timeline
      </Link>
      <Link color="inherit" href="#">
        Gallery
      </Link>
      <Link color="inherit" href="#">
        FAQ
      </Link>
    </Breadcrumbs>
  );
};

export default Header;

// <Breadcrumbs aria-label="breadcrumb">
//   <Link color="inherit" href="/" onClick={handleClick}>
//     Material-UI
//   </Link>
//   <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
//     Core
//   </Link>
//   <Typography color="textPrimary">Breadcrumb</Typography>
// </Breadcrumbs>