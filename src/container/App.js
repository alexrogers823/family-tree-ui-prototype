import React, { Component } from 'react';
import './App.css';
import Member from '../modules/FrequentlyAskedQuestions/Member';
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

class App extends Component {
  state = {
    name: "Oscar Rogers",
    birth: "January 1, 1910",
    death: "April 5, 1994",
    birthplace: "Iuka, MS",
    residence: "Gary, IN",
    parents: ["Mark Rogers", "Gene Rogers"],
    children: ["Patricia Rogers", "Rogercarole Rogers", "Oscar Barry Rogers"],
    spouse: "Helen French Rogers",
    photos: ["photo 1", "photo 2", "photo 3"],
    questions: [
      {
        id: 1,
        question: "I noticed a piece of information is incorrect about a family member. How can I correct it?",
        answer: "Once you are logged in, you can edit most information on a family member. If there's information that you can't edit yourself, email the administrator."
      },
      {
        id: 2,
        question: "I need to delete a timeline event. How can I do this?",
        answer: "This requires admin approval. Send an email and list the reason for deletion."
      }
    ],
    timelineEvents: [
      {
        id: 1,
        year: 1995,
        timelineEvent: "Some event happened"
      },
      {
        id: 2,
        year: 2012,
        timelineEvent: "Alex graduates high school"
      },
      {
        id: 3,
        year: 2018,
        timelineEvent: "Simone and Chris marry"
      },
      {
        id: 4,
        year: 2020,
        event: "Helen F. Rogers turns 100 years old"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        {/* <Member 
          name={this.state.name} 
          birth={this.state.birth}
          death={this.state.death}
          birthplace={this.state.birthplace}
          residence={this.state.residence}
          parents={this.state.parents}
          offspring={this.state.children}
          spouse={this.state.spouse}
        /> */}
        {<TimelineEvents timelineEvents={this.state.timelineEvents} />}
        {/* <Main /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <AddMemberModal /> */}
        {/* <EditMemberPageModal /> */}
        {/* <AddEventModal /> */}
        {/* <FrequentlyAskedQuestions questions={this.state.questions} /> */}
        {/* <Header /> */}
        {/* <Footer /> */}
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
