import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import * as urls from '../urls';
import { concatenateDate } from '../utils';

// TODO: Remove once redux is working 
import { faqData, timelineData, artifactData } from '../dummyData';
import { familyMembers } from '../memberData';


import './App.css';
import Base from '../hoc/Base';
import Main from '../modules/Main';
import FrequentlyAskedQuestions from '../modules/FrequentlyAskedQuestions';
import Gallery from '../modules/Gallery';
import TimelineEvents from '../modules/TimelineEvents';
import { Page404, Page500 } from '../components/ErrorPages';
import ComingSoon from '../components/ComingSoon';
import Lineage from '../modules/Lineage';
import UserSettings from '../modules/UserSettings';
import Members from '../modules/Members';
import Artifacts from '../modules/Artifacts';

class App extends Component {
  // state = {
  //   photos: new Array(20).fill('').map((element, i) => `photo ${i+1}`),
  //   artifacts: [ ...artifactData ],
  //   questions: [ ...faqData ],
  //   members: [ ...familyMembers ],
  //   timelineEvents: [ ...timelineData ]
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Base>
            <Router>
              <div>
                <Switch>
                  <Route path={urls.faqUrl}>
                    <FrequentlyAskedQuestions />
                  </Route>
                  <Route path={urls.memberUrl}>
                    <Members />
                  </Route>
                  <Route path={urls.timelineUrl}>
                    <TimelineEvents />
                  </Route>
                  <Route path={urls.userUrl}>
                    {/* <UserSettings /> */}
                    <Redirect to={urls.comingSoonUrl} />
                  </Route>
                  <Route path={urls.comingSoonUrl}>
                    <ComingSoon />
                  </Route>
                  <Route path={urls.lineageUrl}>
                    {/* <Lineage 
                      name={this.state.members[4].firstName} 
                      birth={concatenateDate(this.state.members[4].birthDay, this.state.members[4].birthMonth, this.state.members[4].birthYear)} 
                      death={concatenateDate(this.state.members[4].deathDay, this.state.members[4].deathMonth, this.state.members[4].deathYear)} 
                      parents={[this.state.members[4].primaryParentId, this.state.members[4].secondaryParentId]} 
                    /> */}
                    <Redirect to={urls.comingSoonUrl} />
                  </Route>
                  <Route path={urls.notFoundUrl}>
                    <Page404 />
                  </Route>
                  <Route path={urls.serverErrorUrl}>
                    <Page500 />
                  </Route>
                  <Route path={urls.galleryUrl}>
                    {/* <Gallery /> */}
                    <Redirect to={urls.comingSoonUrl} />
                  </Route>
                  <Route path={urls.artifactsUrl}>
                    {/* <Artifacts /> */}
                    <Redirect to={urls.comingSoonUrl} />
                  </Route>
                  <Route path="/">
                    <Main />
                  </Route>
                </Switch>
              </div>
            </Router>
          </Base>
        </div>
      </Provider>
    );
  }
}

export default App;
