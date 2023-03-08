import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route, Switch, useRouteMatch
} from "react-router-dom";
import Link from '../../components/common/Link';
import Member from './Member';
import { getAllFamilyMembers } from './redux/actions';

const arrangeMemberLink = (member, url) => {
  return (
    <>
      <Link href={`${url}/${member.id}`}>
        {member.preferredName || member.firstName} {member.lastName}
      </Link>
      <br />
    </>
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
          <Fragment>
            <h3>Family member pages by their id. Put '/1' after the url as an example.</h3>
            <h5>List of existing members</h5>
            {familyMembers.map(person => arrangeMemberLink(person, match.path))}
          </Fragment>
        </Route>
      </Switch>
    </div>
  )
  
};

export default Members;