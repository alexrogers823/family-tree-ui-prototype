import React from 'react';
import { Provider, useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import store from '../redux/store';

import * as urls from '../urls';

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

const App = () => {
  const { isAuthenticated } = useSelector(state => state.usersReducer);

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
                    { isAuthenticated ? <UserSettings /> : <Redirect to="/" /> }
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

export default App;
