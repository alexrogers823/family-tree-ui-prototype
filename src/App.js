import React, { Component } from 'react';
import './App.css';
import Member from './Member';

class App extends Component {
  state = {
    name: "Oscar Rogers",
    birth: "January 1, 1910",
    death: "April 5, 1994",
    birthplace: "Iuka, MS",
    residence: "Gary, IN",
    parents: ["Mark Rogers", "Gene Rogers"],
    children: ["Patricia Rogers", "Rogercarole Rogers", "Oscar Barry Rogers"],
    spouse: "Helen French Rogers"
  }

  render() {
    return (
      <div className="App">
        <Member 
          name={this.state.name} 
          birth={this.state.birth}
          death={this.state.death}
          birthplace={this.state.birthplace}
          residence={this.state.residence}
          parents={this.state.parents}
          offspring={this.state.children}
          spouse={this.state.spouse}
        />
      </div>
    );
  }
}

export default App;
