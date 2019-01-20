import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const mockThought = { body: 'World', title: 'hello'}
describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App/>
    )
  })
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('renders a thoughtList with the correct props', () => {

  });
  
  it('initial state is an empty array', () => {
    expect(wrapper.state()).toEqual({ thoughts: [] })
  });
  
  it('createThought adds a thought to state', () => {
    const now = Date.now()
    Date.now = jest.fn().mockReturnValue(now)  
    wrapper.instance().createThought(mockThought);
    expect(wrapper.state()).toEqual({ thoughts: [{...mockThought, id: now} ]})
  });

  it('deleteThought removes a thought from state', () => {
    wrapper.setState(
      { thoughts: [{...mockThought, id: 1234 }]}
    );
    wrapper.instance().deleteThought(1234)
    expect(wrapper.state()).toEqual({ thoughts: [] })
  })

  it('should find the index of a thought in state when passed the id', () => {
    wrapper.setState({ thoughts: [{ ...mockThought, id: 1234}] })
    expect(wrapper.instance().findIndexFromId(1234)).toEqual(0)
  })
})

