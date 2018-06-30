import React from 'react';
import { paths } from '../../tests/swagger-sample';
import RequestPaths from '../RequestPaths';
import RequestPath from '../../components/RequestPath';

describe('<RequestPaths />', () => {
  it('renders a <h3> tag', () => {
    const wrapper = shallow(<RequestPaths paths={paths} />);

    expect(wrapper.find('h3').length).toBe(1);
  });

  it('multiple a <RequestPath /> component', () => {
    const wrapper = shallow(<RequestPaths paths={paths} />);

    expect(wrapper.find(RequestPath).length).toBe(2);
  });
});
