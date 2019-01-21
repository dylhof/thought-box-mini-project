import React, { Component } from 'react';

class CreateThought extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createThought(this.state);
    this.setState({ body: '', title: '' });
    
  }

  render() {
    return(
      <form className="new-thought-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Thought Title: </label>
        <input id="titleInput" type="text" name="title" value={this.state.title} placeholder="Enter Title Here" onChange={this.handleChange} required/>
        <label htmlFor="body">Thought: </label>
        <input type="text" name="body" value={this.state.body} placeholder="Enter Thought Here"  onChange={this.handleChange} required/>
        <input className="submit-new-thought-btn" type="submit" value="Submit New Thought" />
      </form>
    );  
  }
}

export default CreateThought
