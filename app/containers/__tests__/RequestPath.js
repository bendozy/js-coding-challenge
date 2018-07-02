import React from 'react';
import { paths } from '../../tests/swagger-sample';
import RequestMethod from '../RequestMethod';
import RequestPath from '../RequestPath';

describe('<RequestPath />', () => {
  it('renders a 3 <RequestMethods> tag', () => {
    const wrapper = shallow(<RequestPath path={paths['/todos']} />);

    expect(wrapper.find(RequestMethod).length).toBe(2);
  });
});
