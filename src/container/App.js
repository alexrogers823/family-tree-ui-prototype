import React, { Component } from 'react';
import './App.css';
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
import { memberData, timelineData, faqData } from '../dummyData';

class App extends Component {
  state = {
    ...memberData,
    // photos: ["photo 1", "photo 2", "photo 3"],
    photos: new Array(20).fill('').map((element, i) => `photo ${i+1}`),
    questions: faqData,
    timelineEvents: timelineData
  }

  render() {
    return (
      <div className="App">
        <Member 
          firstName={this.state.firstName} 
          middleName={this.state.middleName} 
          lastName={this.state.lastName} 
          preferredName={this.state.preferredName} 
          birth={this.state.birth}
          death={this.state.death}
          birthplace={this.state.birthplace}
          residence={this.state.residence}
          parents={this.state.parents}
          offspring={this.state.children}
          spouse={this.state.spouse}
        />
        {/* {<TimelineEvents timelineEvents={this.state.timelineEvents} />} */}
        {/* <Main /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <AddMemberModal /> */}
        {/* <EditMemberPageModal firstName="Oscar" /> */}
        {/* <AddEventModal /> */}
        {/* <FrequentlyAskedQuestions questions={this.state.questions} /> */}
        {/* <Header /> */}
        {/* <Footer /> */}
        {/* <Gallery photos={this.state.photos} /> */}
        {/* <Page404 /> */}
        {/* <Page500 /> */}
        {/* <ComingSoon /> */}
      </div>
    );
  }
}

export default App;
