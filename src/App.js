import React, { Component } from 'react';
import './App.css';
import Member from './Member';
import Timeline from './Timeline';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import AddMemberModal from './AddMemberModal';
import AddEventModal from './AddEventModal';
import EditMemberPageModal from './EditMemberPageModal';

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
    timelineEvents: [
      {
        id: 1,
        year: 1995,
        event: "Some event happened"
      },
      {
        id: 2,
        year: 2012,
        event: "Alex graduates high school"
      },
      {
        id: 3,
        year: 2018,
        event: "Simone and Chris marry"
      },
      {
        id: 4,
        year: 2020,
        event: "Helen F. Rogers turns 100 years old"
      }
    ]
  }

  renderTimelineEvents = () => {
    return this.state.timelineEvents.map(ev => {
      return (
        <Timeline year={ev.year} event={ev.event} key={ev.id} />
      )
    })
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
        {/* {this.renderTimelineEvents()} */}
        {/* <Main /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <AddMemberModal /> */}
        {/* <EditMemberPageModal /> */}
        <AddEventModal />
      </div>
    );
  }
}

export default App;
