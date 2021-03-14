import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Link from '../../components/common/Link';

import Member from './Member';
import { memberBioPlaceholder } from '../../dummyData';
// import { familyMembers } from '../../memberData';

import {
  getAllFamilyMembers
} from '../../redux/actions';


const ChosenMember = props => {
  let { topicId } = useParams();

  console.log('props', props);
  console.log('topicId', topicId);

  return (
    <Member />
  )
}

const arrangeMemberLink = (member, url) => {
  return (
    <Fragment>
      <Link 
        href={`${url}/${member.id}`}
        >
        {member.firstName} {member.lastName}
      </Link>
      <br />
    </Fragment>
  )
};

const Members = () => {
  let match = useRouteMatch();
  const dispatch = useDispatch();

  const familyMembers = useSelector(state => state.membersReducer.members);

  console.log('family', familyMembers);

  useEffect(() => {
    dispatch(getAllFamilyMembers());
  }, []);

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <ChosenMember />
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