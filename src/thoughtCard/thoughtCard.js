import React from 'react';

export const ThoughtCard = (props) => {
  return (
    <div className='card-div' id={props.thought.id}>
      <h3>{props.thought.title}</h3>
      <p>{props.thought.body}</p>
      <i className='card-delete-btn' onClick={() => {props.deleteThought(props.thought.id)}}class="fas fa-trash-alt"></i>
    </div>
  )
}
