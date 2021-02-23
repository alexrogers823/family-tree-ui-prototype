import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

import { getAllFamilyMembers } from './redux/actions';


const ChosenMember = props => {
  let { topicId } = useParams();

  useEffect(() => {
    props.getAllFamilyMembers();
  }, []);

  console.log('id', topicId);
  console.log('props', props);

  return (
    <Member 
      firstName={props.members[topicId].firstName} 
      middleName={props.members[topicId].middleName} 
      lastName={props.members[topicId].lastName} 
      preferredName={props.members[topicId].preferredName} 
      // birth={props.birth}
      birthDay={props.members[topicId].birthDay}
      birthMonth={props.members[topicId].birthMonth}
      birthYear={props.members[topicId].birthYear}
      isAlive={props.members[topicId].isAlive}
      // death={props.death}
      deathDay={props.members[topicId].deathDay}
      deathMonth={props.members[topicId].deathMonth}
      deathYear={props.members[topicId].deathYear}
      // birthplace={props.birthplace}
      birthplace={props.members[topicId].birthplace}
      // residence={props.residence}
      residence={props.members[topicId].residence}
      // parents={props.parents}
      parents={["Patricia Crozier", "Ronald Crozier"]}
      // offspring={props.children}
      offspring={["Child 1"]}
      // spouse={props.members[0].spouse}
      spouse={"Nikita"}
      bio={memberBioPlaceholder}
    />
  )
}

const Members = (props) => {
  let match = useRouteMatch();

  console.log('parent props', props);
  
  useEffect(() => {
    props.getAllFamilyMembers();
  }, []);

  return (
    <div>
      <Switch>
        <Route 
          path={`${match.path}/:topicId`}
          render={props => <ChosenMember {...props} />}
        >
        </Route>
        <Route path={match.path}>
          <h3>Family member pages by their id. Put '/1' after the url as an example.</h3>
        </Route>
      </Switch>
    </div>
  )
  
};

const mapStateToProps = state => {
  return {
    // members: state.membersReducer.members
    ...state.membersReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllFamilyMembers: () => dispatch(getAllFamilyMembers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Members);