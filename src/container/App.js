import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as urls from '../urls';

import './App.css';
import Base from '../hoc/Base';
import Member from '../modules/Member';
import Timeline from '../modules/TimelineEvents/Timeline';
import Main from '../modules/Main';
import Login from '../components/Login';
import Signup from '../components/Signup';
import AddMemberModal from '../components/AddMemberModal';
import AddEventModal from '../components/AddEventModal';
import EditMemberPageModal from '../components/EditMemberPageModal';
import FrequentlyAskedQuestions from '../modules/FrequentlyAskedQuestions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../modules/Gallery';
import TimelineEvents from '../modules/TimelineEvents';
import { Page404, Page500 } from '../components/ErrorPages';
import ComingSoon from '../components/ComingSoon';
import Lineage from '../modules/Lineage';
import { timelineData, faqData } from '../dummyData';
import { familyMembers } from '../memberData';
import UserSettings from '../components/UserSettings';

class App extends Component {
  state = {
    // photos: ["photo 1", "photo 2", "photo 3"],
    photos: new Array(20).fill('').map((element, i) => `photo ${i+1}`),
    questions: faqData,
    timelineEvents: timelineData,
    members: [ ...familyMembers ]
  }

  render() {
    return (
      <div className="App">
        <Base>
          <Router>
            <div>
              {/* <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/faq">Frequently Asked Questions</Link>
                  </li>
                  <li>
                    <Link to="/member">Family Member Page Example</Link>
                  </li>
                  <li>
                    <Link to="/timeline">Past Family Events</Link>
                  </li>
                  <li>
                    <Link to="/user">User Settings Example</Link>
                  </li>
                  <li>
                    <Link to="/comingsoon">Coming Soon Page</Link>
                  </li>
                  <li>
                    <Link to="/lineage">Lineage (under construction)</Link>
                  </li>
                  <li>
                    <Link to="/404">Not Found Page</Link>
                  </li>
                  <li>
                    <Link to="/500">Server Error Page</Link>
                  </li>
                </ul>
              </nav> */}

              <Switch>
                <Route path={urls.faqUrl}>
                  <FrequentlyAskedQuestions questions={this.state.questions} />
                </Route>
                <Route path={urls.memberUrl}>
                  <Member 
                    firstName={this.state.members[0].firstName} 
                    middleName={this.state.members[0].middleName} 
                    lastName={this.state.members[0].lastName} 
                    preferredName={this.state.members[0].preferredName} 
                    // birth={this.state.birth}
                    birthDay={this.state.members[0].birthDay}
                    birthMonth={this.state.members[0].birthMonth}
                    birthYear={this.state.members[0].birthYear}
                    isAlive={this.state.members[0].isAlive}
                    // death={this.state.death}
                    deathDay={this.state.members[0].deathDay}
                    deathMonth={this.state.members[0].deathMonth}
                    deathYear={this.state.members[0].deathYear}
                    // birthplace={this.state.birthplace}
                    birthplace={"Iuka, MS"}
                    // residence={this.state.residence}
                    residence={"Gary, IN"}
                    // parents={this.state.parents}
                    parents={["Jimmy French", "Robert French"]}
                    // offspring={this.state.children}
                    offspring={["Patricia Crozier", "Rogercarole Rogers", "Barry Rogers"]}
                    // spouse={this.state.members[0].spouse}
                    spouse={"Oscar Rogers"}
                  />
                </Route>
                <Route path={urls.timelineUrl}>
                  <TimelineEvents timelineEvents={this.state.timelineEvents} />
                </Route>
                <Route path={urls.userUrl}>
                  <UserSettings firstName="Harry" lastName="Potter" email="halfbloodprince@gmail.com"/>
                </Route>
                <Route path={urls.comingSoonUrl}>
                  <ComingSoon />
                </Route>
                <Route path={urls.lineageUrl}>
                  <Lineage name={this.state.firstName} birth={this.state.birth} death={this.state.death} parents={this.state.parents} />
                </Route>
                <Route path={urls.notFoundUrl}>
                  <Page404 />
                </Route>
                <Route path={urls.serverErrorUrl}>
                  <Page500 />
                </Route>
                <Route path={urls.galleryUrl}>
                  <Gallery />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </div>
          </Router>
        </Base>
      </div>
    );
  }
}


{/* <Login /> */}
{/* <Signup /> */}
{/* <AddMemberModal /> */}
{/* <EditMemberPageModal firstName="Oscar" /> */}
{/* <AddEventModal /> */}
{/* <Header /> */}
{/* <Footer /> */}
{/* <Gallery photos={this.state.photos} /> */}

export default App;
