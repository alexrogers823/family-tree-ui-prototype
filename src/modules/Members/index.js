import { Box, Grid, Paper, styled } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Link from '../../components/common/Link';
import Member from './Member';
import { getAllFamilyMembers } from './redux/actions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const arrangeMemberLink = (member, url) => {
  return (
    <Grid xs={3} spacing={2}>
      <Item elevation={3}>
        <Link href={`${url}/${member.id}`}>
          {member.preferredName || member.firstName} {member.lastName}
        </Link>
      </Item>
      <br />
    </Grid>
  )
};

const Members = () => {
  let match = useRouteMatch();
  const dispatch = useDispatch();

  const familyMembers = useSelector(state => state.membersReducer.members);

  useEffect(() => {
    fetch("/api/members/")
    .then(response => response.json())
    .then(members => dispatch(getAllFamilyMembers(members)))
    .catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Member />
        </Route>
        <Route path={match.path}>
          <Box sx={{ width: '95%', margin: 2 }}>
            <h3>List of existing members</h3>
            <Grid container rowSpacing={2} columnSpacing={2}>
              {familyMembers.map(person => arrangeMemberLink(person, match.path))}
            </Grid>
          </Box>
        </Route>
      </Switch>
    </div>
  )
};

export default Members;