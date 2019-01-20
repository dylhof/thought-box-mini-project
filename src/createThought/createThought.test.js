import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './CreateThought.js';

describe('CreateThought', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'title' } }
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'body' } }
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('calls createThought prop function with the data from state as an argument, and input fields go back to empty strings', () => {
    const createThoughtMock = jest.fn();
    const event = { preventDefault: () => {} };
    const wrapper = shallow(
      <CreateThought createThought={createThoughtMock} />
    );
    const expectedState = {
      body: '',
      title: ''
    };
    wrapper.setState({ body: 'World', title: 'Hello' })
    wrapper.find('.new-thought-form').simulate('submit', { preventDefault: () => {} })
    expect(createThoughtMock).toBeCalledWith({ body: 'World', title: 'Hello' });
    expect(wrapper.state()).toEqual(expectedState)
  });

});
