import React, { Component } from 'react';
import './styles/main.scss';
import CreateThought from './createThought/createThought';
import { ThoughtList } from './thoughtList/thoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state
    const newThought = {...thought, id: Date.now()}
    this.setState({ thoughts: [...thoughts, newThought] });
  }

  deleteThought = (id) => {
    const index = this.findIndexFromId(id);
    let newThoughts=[...this.state.thoughts]
    newThoughts.splice(index, 1);
    this.setState({ thoughts: newThoughts })
  }

  findIndexFromId = (id) => {
   const index = this.state.thoughts.findIndex(thought => {
      return thought.id === id
    });
    return index;
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>ThoughtBox</h2>
        </div>
        <CreateThought createThought={this.createThought} />
        <div>
          <ThoughtList 
            thoughtList={this.state.thoughts}
            deleteThought={this.deleteThought} />
        </div>
      </div>
    );
  }
}

export default App;
