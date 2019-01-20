import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './ThoughtCard.js';

const mockThought = { title: 'Hello', body: 'World', id: 0 };
const deleteThoughtMock = jest.fn();

describe('ThoughtCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ThoughtCard 
        thought={mockThought}
        deleteThought={deleteThoughtMock}
      />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call deleteThought when remove button is clicked', () => {
    wrapper.find('.card-delete-btn').simulate('click');
    expect(deleteThoughtMock).toBeCalledWith(0)
  })

});
