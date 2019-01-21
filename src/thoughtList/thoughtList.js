import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard'

export const ThoughtList = (props) => {

  return (
    <div className='thought-list-div'>
      {props.thoughtList.map(thought => {
        return <ThoughtCard 
                  key={thought.id} 
                  thought={thought}
                  deleteThought={props.deleteThought} />
        })
      }
    </div>
  );
}
