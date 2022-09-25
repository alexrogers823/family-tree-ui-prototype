import React from 'react';
import Link from '../common/Link';
import { styled } from "@mui/system";

const Footer = props => {
  return (
    <div>
      <hr />
      <span sx={{ m: (theme) => theme.spacing(2) }}>CFPG Family Tree</span>
      <span sx={{ m: (theme) => theme.spacing(2) }}>&copy; 2020</span>
      <Link sx={{ m: (theme) => theme.spacing(2) }} target="new" href="https://github.com/alexrogers823/family-tree-ui-prototype">Source Code</Link>
    </div>
  );
};

export default Footer;