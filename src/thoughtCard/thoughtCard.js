import React from 'react';

export const ThoughtCard = (props) => {
  return (
    <div className='card-div' id={props.thought.id}>
      <h3>{props.thought.title}</h3>
      <p>{props.thought.body}</p>
      <button className='card-delete-btn' onClick={() => {props.deleteThought(props.thought.id)}}>Remove Thought</button>
    </div>
  )
}
