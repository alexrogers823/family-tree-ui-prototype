import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import store from '../redux/store';

import * as urls from '../urls';

// TODO: Remove once redux is working 


import ComingSoon from '../components/ComingSoon';
import { Page404, Page500 } from '../components/ErrorPages';
import Base from '../hoc/Base';
import FrequentlyAskedQuestions from '../modules/FrequentlyAskedQuestions';
import Lineage from '../modules/Lineage';
import Main from '../modules/Main';
import Members from '../modules/Members';
import TimelineEvents from '../modules/TimelineEvents';
import UserSettings from '../modules/UserSettings';
import './App.css';

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
          <Router>
            <Base>
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
                    <UserSettings />
                    {/* <Redirect to={urls.comingSoonUrl} /> */}
                  </Route>
                  <Route path={urls.comingSoonUrl}>
                    <ComingSoon />
                  </Route>
                  <Route path={urls.lineageUrl}>
                    <Lineage />
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
            </Base>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
