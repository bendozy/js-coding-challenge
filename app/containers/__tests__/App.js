import React from 'react';
import swagger from '../../tests/swagger-sample';
import { App, mapStateToProps } from '../App';
import Schemes from '../Schemes';
import RequestPaths from '../RequestPaths';
import Authorization from '../Authorization';

const setAuthKey = jest.fn();

describe('<App />', () => {
  it('renders a <h1> tag', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders a <Schemes /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(wrapper.find(Schemes).length).toBe(1);
  });

  it('renders a <RequestPaths /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(wrapper.find(RequestPaths).length).toBe(1);
  });

  it('renders a <Authorization /> component', () => {
    const wrapper = shallow(<App setAuthKey={setAuthKey} swagger={swagger} />);

    expect(wrapper.find(Authorization).length).toBe(1);
  });

  it('check for the correct scheme value', () => {
    expect(mapStateToProps({ swagger: { scheme: 'test' } }).swagger.scheme).toBe('test');
  });
});
