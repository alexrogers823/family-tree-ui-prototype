import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Member from './Member';
import { memberBioPlaceholder } from '../../dummyData';


const ChosenMember = props => {
  let { topicId } = useParams();

  console.log('props', props);
  console.log('topicId', topicId);

  return (
    <Member pageId={topicId} />
  )
}

const Members = (props) => {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <ChosenMember />
        </Route>
        <Route path={match.path}>
          <h3>Family member pages by their id. Put '/1' after the url as an example.</h3>
        </Route>
      </Switch>
    </div>
  )
  
};

export default Members;