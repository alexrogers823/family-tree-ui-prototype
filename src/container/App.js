import React, { Component } from 'react';
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
          <Member 
            firstName={this.state.members[0].firstName} 
            middleName={this.state.members[0].middleName} 
            lastName={this.state.members[0].lastName} 
            preferredName={this.state.members[0].preferredName} 
            // birth={this.state.birth}
            birth={"December 16, 1920"}
            // death={this.state.death}
            death={null}
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
          {/* <Lineage name={this.state.firstName} birth={this.state.birth} death={this.state.death} parents={this.state.parents} /> */}
          {/* <TimelineEvents timelineEvents={this.state.timelineEvents} /> */}
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
        </Base>
      </div>
    );
  }
}

export default App;
