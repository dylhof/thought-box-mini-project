import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './ThoughtList.js';

describe('ThoughtList', () => {
  
  it('should match the snapshot with no thoughts', () => {
    const wrapper = shallow(
      <ThoughtList thoughtList={[]} />
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with thoughts', () => {
    const wrapper = shallow(
      <ThoughtList thoughtList={[{ body: 'World', title: 'Hello', id: 0 }]}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
